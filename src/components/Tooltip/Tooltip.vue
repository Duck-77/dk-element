<template>
    <div
        ref="tooltipRef"
        class="dk-tooltip"
        :class="{
            [`dk-tooltip-${effect}`]: effect,
        }"
        v-on="outerEvents">
        <div
            ref="triggerRef"
            class="dk-tooltip__trigger"
            v-on="events">
            <slot></slot>
        </div>
        <Transition :name="transition">
            <div
                ref="popperRef"
                class="dk-tooltip__popper"
                v-if="isPopperVisible">
                <slot name="content">
                    {{ content }}
                </slot>
                <div
                    id="arrow"
                    data-popper-arrow></div>
            </div>
        </Transition>
    </div>
</template>
<script setup lang="ts">
defineOptions({
    name: 'DkTooltip',
})
import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import type { Toggle, TooltipEmits, TooltipExpose, TooltipProps } from './types'
import { createPopper } from '@popperjs/core'
import type { Instance } from '@popperjs/core'
import { unset, debounce } from 'lodash-es'
import useClickOutside from '@/hooks/useClickOutside'

const props = withDefaults(defineProps<TooltipProps>(), {
    effect: 'dark',
    trigger: 'click',
    placement: 'bottom',
    transition: 'fade',
    showAfter: 0,
    hideAfter: 0,
})

const emits = defineEmits<TooltipEmits>()
// DOM
const tooltipRef = ref<HTMLElement>()
const triggerRef = ref<HTMLElement>()
const popperRef = ref<HTMLElement>()
const isPopperVisible = ref(false)

const events = reactive<Record<string, Function>>({})
const outerEvents = reactive<Record<string, Function>>({})

const popperOptions = computed(() => {
    return {
        placement: props.placement,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 9],
                },
            },
        ],
        ...props.popperOptions,
    }
})

const debounceShow = debounce(() => {
    isPopperVisible.value = true
    emits('visible-change', true)
}, props.showAfter)

const debounceHide = debounce(() => {
    isPopperVisible.value = false
    emits('visible-change', false)
}, props.hideAfter)

const handlePopperShow = () => {
    debounceHide.cancel()
    debounceShow()
}

const handlePopperHide = () => {
    debounceShow.cancel()
    debounceHide()
}

const attchEvents = () => {
    if (props.trigger === 'click') {
        events['click'] = () => {
            if (isPopperVisible.value) {
                handlePopperHide()
            } else {
                handlePopperShow()
            }
        }
    } else if (props.trigger === 'hover') {
        events['mouseenter'] = handlePopperShow
        outerEvents['mouseleave'] = handlePopperHide
    }
}

const clearEvents = () => {
    unset(events, 'click')
    unset(events, 'mouseenter')
    unset(outerEvents, 'mouseleave')
}

useClickOutside(tooltipRef, () => {
    if (props.trigger === 'click' && isPopperVisible.value && !props.manual) {
        handlePopperHide()
    }
    if (isPopperVisible.value) {
        emits('click-outside', true)
    }
})

let popper: Instance

watch(
    isPopperVisible,
    (cur) => {
        if (cur) {
            if (triggerRef.value && popperRef.value) {
                popper = createPopper(triggerRef.value, popperRef.value, popperOptions.value)
            }
        }
    },
    {
        flush: 'post',
    }
)

watch(
    () => props.trigger,
    (cur, pre) => {
        if (cur !== pre) {
            clearEvents()
            attchEvents()
        }
    }
)

watch(
    () => props.manual,
    (cur) => {
        if (cur) {
            clearEvents()
        } else {
            attchEvents()
        }
    }
)

defineExpose<TooltipExpose>({
    tooltipRef,
    contentRef: popperRef,
    onShow: handlePopperShow,
    onHide: handlePopperHide,
})

onMounted(() => {
    if (!props.manual) {
        attchEvents()
    }
})

onUnmounted(() => {
    popper?.destroy()
})
</script>
<style scoped></style>
