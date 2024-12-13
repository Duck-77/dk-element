<template>
    <Transition
        name="fade-down-up"
        @after-leave="destoryComponent"
        @enter="updateHeight">
        <div
            ref="messageRef"
            class="dk-message"
            :class="{
                [`dk-message--${type}`]: type,
                'is-close': showClose,
                'is-plain': plain,
            }"
            :style="messageStyle"
            role="alert"
            @mouseenter="clearTimer"
            @mouseleave="handleLeave"
            v-if="messageShow">
            <div class="dk-message__content">
                <TypeIcon
                    :type="icon ?? type"
                    class="dk-message-icon"></TypeIcon>
                <slot>
                    <Render :vnode="message" />
                </slot>
            </div>
            <span
                class="dk-message__close"
                v-if="showClose"
                @click="handleClickClose">
                <Icon icon="xmark"></Icon>
            </span>
        </div>
    </Transition>
</template>
<script setup lang="ts">
defineOptions({
    name: 'DkMessage',
})
import { computed, nextTick, onMounted, ref } from 'vue'
import Render from '../Common/Render'
import Icon from '../Icon/Icon.vue'
import type { MessageEmits, MessageProps } from './types'
import { getLastMessageBottomOffset } from './method'
import { useEventListener } from '@/hooks/useEventListener'
import { useTimer } from '@/hooks/useTimer'
import TypeIcon from '../Common/TypeIcon'

const props = withDefaults(defineProps<MessageProps>(), {
    type: 'info',
    duration: 3000,
    offset: 20,
    onShow: () => {},
    onClose: () => {},
    onClickClose: () => {},
})

const emits = defineEmits<MessageEmits>()

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
    props.onShow()
    if (props.duration <= 0) return
    startTimer()
}

const handleLeave = () => {
    props.onClose()
    if (props.duration > 0) {
        startTimer()
    }
}

const handleClickClose = () => {
    messageShow.value = false
    props.onClickClose()
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
