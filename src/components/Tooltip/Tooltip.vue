<template>
    <div ref="tooltipRef" class="dk-tooltip" :class="{
        [`dk-tooltip-${effect}`]: effect
    }" v-on="outerEvents">
        <div ref="triggerRef" class="dk-tooltip__trigger" v-on="events">
            <slot></slot>
        </div>
        <Transition :name="transition" v-on="transition === 'drop' ? dropTransitionEvent : {}">
            <div ref="popperRef" class="dk-tooltip__popper" v-if="popperShow">
                <slot name="content">
                    {{ content }}
                </slot>
                <div id="arrow" data-popper-arrow></div>
            </div>
        </Transition>
    </div>
</template>
<script setup lang="ts">
    import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue'
    import type { Toggle, TooltipEmits, TooltipExpose, TooltipProps } from "./types"
    import { createPopper } from '@popperjs/core';
    import type { Instance } from '@popperjs/core';
    import { unset, debounce } from "lodash-es"
    import useClickOutside from '@/hooks/useClickOutside';

    const props = withDefaults(defineProps<TooltipProps>(), {
        effect: 'dark',
        trigger: 'click',
        placement: 'bottom',
        transition: 'fade',
        showAfter: 0,
        hideAfter: 0
    })

    const emits = defineEmits<TooltipEmits>()
    // DOM
    const tooltipRef = ref<HTMLElement>()
    const triggerRef = ref<HTMLElement>()
    const popperRef = ref<HTMLElement>()
    const popperShow = ref(false)

    const events = reactive<Record<string, Function>>({})
    const outerEvents = reactive<Record<string, Function>>({})

    const popperOptions = computed(() => {
        return {
            placement: props.placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 9]
                    }
                }
            ],
            ...props.popperOptions
        }
    })

    // Fn
    const toggle: Toggle = () => {
        if (popperShow.value) {
            toggle.hide()
        } else {
            toggle.show()
        }
    }

    const debounceShow = debounce(() => {
        popperShow.value = true
        emits('visible-change', true)
    }, props.showAfter)

    const debounceHide = debounce(() => {
        popperShow.value = false
        emits('visible-change', false)
    }, props.hideAfter)

    toggle.show = () => {
        debounceHide.cancel()
        debounceShow()
    }

    toggle.hide = () => {
        debounceShow.cancel()
        debounceHide()
    }

    const attchEvents = () => {
        if (props.trigger === 'click') {
            events['click'] = toggle
        } else if (props.trigger === 'hover') {
            events['mouseenter'] = toggle.show
            outerEvents['mouseleave'] = toggle.hide
        }
    }

    const clearEvents = () => {
        unset(events, 'click')
        unset(events, 'mouseenter')
        unset(outerEvents, 'mouseleave')
    }

    useClickOutside(tooltipRef, () => {
        if (props.trigger === 'click' && popperShow.value && !props.manual) {
            toggle.hide()
        }
        if (popperShow.value) {
            emits('click-outside', true)
        }
    })

    let popper: Instance

    watch(popperShow, (cur) => {
        if (cur) {
            if (triggerRef.value && popperRef.value) {
                popper = createPopper(triggerRef.value, popperRef.value, popperOptions.value)
            }
        } else {
            setTimeout(() => {
                popper.destroy()
            }, props.hideAfter + 300 + 10)
        }
    }, {
        flush: 'post'
    })

    watch(() => props.trigger, (cur, pre) => {
        if (cur !== pre) {
            clearEvents()
            attchEvents()
        }
    })

    watch(() => props.manual, (cur) => {
        if (cur) {
            clearEvents()
        } else {
            attchEvents()
        }
    })

    const dropTransitionEvent: Record<string, (el: HTMLElement) => void> = {
        beforeEnter(el) {
            el.style.height = '0px'
            el.style.overflow = 'hidden'
        },
        enter(el) {
            el.style.height = `${el.scrollHeight}px`
        },
        afterEnter(el) {
            el.style.height = ''
            el.style.overflow = ''
        },
        beforeLeave(el) {
            el.style.height = `${el.scrollHeight}px`
            console.log(el.scrollHeight)
            el.style.overflow = 'hidden'
        },
        leave(el) {
            el.style.height = `0px`
        }
        ,
        afterLeave(el) {
            el.style.height = ''
            el.style.overflow = ''
        },
    }

    defineExpose<TooltipExpose>({
        tooltipRef,
        contentRef: popperRef,
        onShow: toggle.show,
        onHide: toggle.hide
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