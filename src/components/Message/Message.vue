<template>
    <div ref="messageRef" class="dk-message" :class="{
        [`dk-message-${type}`]: type,
        'is-close': showClose
    }" :style="messageStyle" role="alert" v-if="messageShow">
        <div class="dk-message__content">
            <slot>
                {{ lastMessageBottomOffset + ' ' + offset + ' ' + currentMessageTopOffset + ' ' + +messageHeight + ' ' +
                    currentMessageBottomOffset }}
                <Render :vnode="message" />
            </slot>
        </div>
        <span class="dk-message__close" v-if="message" @click="$event => messageShow = false">
            <Icon icon="xmark"></Icon>
        </span>
    </div>
</template>
<script setup lang="ts">
    import { computed, nextTick, onMounted, ref, watch } from 'vue';
    import Render from '../common/Render';
    import Icon from '../Icon/Icon.vue';
    import type { MessageProps } from './types';
    import { getLastMessageBottomOffset } from './method';

    const props = withDefaults(defineProps<MessageProps>(), {
        type: 'info',
        duration: 3000,
        offset: 20
    })

    const messageRef = ref<HTMLElement>()

    const messageShow = ref(false)

    const messageHeight = ref(0)

    const lastMessageBottomOffset = computed(() => {
        // console.log(props.id, '-get_lastMessageBottomOffset--',getLastMessageBottomOffset(props.id))
        return getLastMessageBottomOffset(props.id)
    })

    const currentMessageTopOffset = computed(() => props.offset + lastMessageBottomOffset.value)

    const currentMessageBottomOffset = computed(() => currentMessageTopOffset.value + messageHeight.value)

    const messageStyle = computed(() => ({
        top: currentMessageTopOffset.value + 'px'
    }))

    const showing = () => {
        if (props.duration <= 0) return
        setTimeout(() => {
            messageShow.value = false
        }, props.duration)
    }

    watch(messageShow, (cur) => {
        if (!cur) {
            props.onDestory()
        }
    })

    defineExpose({
        bottomOffset: currentMessageBottomOffset
    })

    onMounted(async () => {
        messageShow.value = true
        showing()

        await nextTick()
        messageHeight.value = messageRef.value!.getBoundingClientRect().height
    })
</script>

<style scoped>
    .dk-message {
        position: fixed;
        top: 10%;
        left: 50%;
        padding: 4px 8px;
        border: 2px solid black;
        background: springgreen;
        transform: translateX(-50%);
    }

</style>