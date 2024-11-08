<template>
    <Transition name="fade-down-up" @after-leave="destoryComponent" @enter="updateHeight">
        <div ref="messageRef" class="dk-message" :class="{
            [`dk-message-${type}`]: type,
            'is-close': showClose,
            'is-plain': plain
        }" :style="messageStyle" role="alert" @mouseenter="clearTimer" @mouseleave="handleLeave" v-if="messageShow">
            <div class="dk-message__content">
                <TypeIcon :type="icon ?? type" class="dk-message-icon"></TypeIcon>
                <slot>
                    <Render :vnode="message" />
                </slot>
            </div>
            <span class="dk-message__close" v-if="showClose" @click="($event) => (messageShow = false)">
                <Icon icon="xmark"></Icon>
            </span>
        </div>
    </Transition>
</template>
<script setup lang="ts">
    import { computed, nextTick, onMounted, ref, watch } from 'vue'
    import Render from '../common/Render'
    import Icon from '../Icon/Icon.vue'
    import type { MessageProps } from './types'
    import { getLastMessageBottomOffset } from './method'
    import { useEventListener } from '@/hooks/useEventListener'
    import { useTimer } from '@/hooks/useTimer'
    import TypeIcon from '../common/TypeIcon'

    const props = withDefaults(defineProps<MessageProps>(), {
        type: 'info',
        duration: 3000,
        offset: 20,
    })

    const messageRef = ref<HTMLElement>()

    const messageShow = ref(false)

    const messageHeight = ref(0)

    const lastMessageBottomOffset = computed(() => {
        return getLastMessageBottomOffset(props.id)
    })

    const currentMessageTopOffset = computed(() => props.offset + lastMessageBottomOffset.value)

    const currentMessageBottomOffset = computed(() => currentMessageTopOffset.value + messageHeight.value)

    const messageStyle = computed(() => ({
        top: currentMessageTopOffset.value + 'px',
        zIndex: props.zIndex,
    }))

    const { startTimer, clearTimer } = useTimer(props.duration, () => {
        messageShow.value = false
    })

    const showing = () => {
        if (props.duration <= 0) return
        startTimer()
    }

    const handleLeave = () => {
        if (props.duration > 0) {
            startTimer()
        }
    }

    const destoryComponent = () => {
        props.onDestory()
    }

    const updateHeight = async () => {
        await nextTick()
        messageHeight.value = messageRef.value!.getBoundingClientRect().height
    }

    defineExpose({
        bottomOffset: currentMessageBottomOffset,
        visible: messageShow,
    })

    useEventListener(document, 'keydown', (e: Event) => {
        const event = e as KeyboardEvent
        if (event.code === 'Escape') {
            messageShow.value = false
        }
    })

    onMounted(async () => {
        messageShow.value = true
        showing()
    })
</script>
