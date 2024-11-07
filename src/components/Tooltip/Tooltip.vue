<template>
    <div ref="tooltipRef" class="dk-tooltip" v-on="outerEvents">
        <div ref="triggerRef" class="dk-tooltip__trigger" v-on="events">
            <slot></slot>
        </div>
        <Transition :name="transition">
            <div ref="floatingRef" class="dk-tooltip__floating" v-if="floatingShow">
                <slot name="content">
                    {{ content }}
                </slot>
            </div>
        </Transition>
    </div>
</template>
<script setup lang="ts">
    import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue'
    import type { Toggle, TooltipEmits, TooltipExpose, TooltipProps } from "./types"
    import { createPopper } from '@popperjs/core';
    import type { Instance } from '@popperjs/core';
    import { unset } from "lodash-es"
    import useClickOutside from '@/hooks/useClickOutside';

    const props = withDefaults(defineProps<TooltipProps>(), {
        triiger: 'click',
        placement: 'bottom',
        transition: 'fade'
    })
    const emits = defineEmits<TooltipEmits>()
    // DOM
    const tooltipRef = ref<HTMLElement>()
    const triggerRef = ref<HTMLElement>()
    const floatingRef = ref<HTMLElement>()
    const floatingShow = ref(false)

    const events = reactive<Record<string, Function>>({})
    const outerEvents = reactive<Record<string, Function>>({})

    const popperOptions = computed(() => {
        return {
            placement: props.placement,
            ...props.popperOptions
        }
    })

    // Fn
    const toggle: Toggle = () => {
        floatingShow.value = !floatingShow.value
        emits('visible-change', floatingShow.value)
    }

    toggle.open = () => {
        floatingShow.value = true
        emits('visible-change', true)
    }

    toggle.close = () => {
        floatingShow.value = false
        console.log('props place',props.placement)
        console.log('options place',props.popperOptions?.placement)
        console.log('options',popperOptions.value)
        emits('visible-change', false)
    }

    const attchEvents = () => {
        if (props.triiger === 'click') {
            events['click'] = toggle
        } else if (props.triiger === 'hover') {
            events['mouseenter'] = toggle.open
            outerEvents['mouseleave'] = toggle.close
        }
    }

    const clearEvents = () => {
        unset(events, 'click')
        unset(events, 'mouseenter')
        unset(outerEvents, 'mouseleave')
    }

    useClickOutside(tooltipRef, () => {
        if (props.triiger === 'click' && floatingShow.value && !props.manual) {
            toggle.close()
        }
    })

    let floating: Instance

    watch(floatingShow, (cur) => {
        if (cur) {
            if (triggerRef.value && floatingRef.value) {
                floating = createPopper(triggerRef.value, floatingRef.value, popperOptions.value)
            }
        } else {
            setTimeout(()=>{
                floating.destroy()
            },350)
        }
    }, {
        flush: 'post'
    })

    watch(() => props.triiger, (cur, pre) => {
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

    defineExpose<TooltipExpose>({
        tooltipRef,
        contentRef: floatingRef,
        onOpen: toggle.open,
        onClose: toggle.close
    })

    onMounted(() => {
        if (!props.manual) {
            attchEvents()
        }
    })

    onUnmounted(() => {
        floating?.destroy()
    })
</script>
<style scoped></style>