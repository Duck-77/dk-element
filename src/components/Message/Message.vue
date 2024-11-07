<template>
    <div class="dk-message" :class="{
        [`dk-message-${type}`]: type,
        'is-close': showClose
    }" role="alert" v-if="messageShow">
        <div class="dk-message__content">
            <slot>
                <Render :vnode="message" />
            </slot>
        </div>
        <span class="dk-message__close" v-if="message" @click="$event => messageShow = false">
            <Icon icon="xmark"></Icon>
        </span>
    </div>
</template>
<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import Render from '../common/Render';
    import Icon from '../Icon/Icon.vue';
    import type { MessageProps } from './types';

    const props = withDefaults(defineProps<MessageProps>(), {
        type: 'info',
        duration: 3000,
    })

    const messageShow = ref(false)

    const showing = () => {
        if (props.duration <= 0) return
        setTimeout(() => {
            messageShow.value = false
        }, props.duration)
    }

    onMounted(() => {
        messageShow.value = true
        console.log('show')
        showing()
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
    }

</style>