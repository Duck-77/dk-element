<template>
    <div class="dk-dropdown">
        <Tooltip
            ref="tooltipRef"
            :manual="manual"
            :effect="effect"
            :transition="transition"
            :trigger="trigger"
            :placement="placement"
            :popper-options="popperOptions"
            :show-after="showAfter"
            :hide-after="hideAfter"
            @visible-change="handleVisibeChange">
            <slot></slot>
            <template #content>
                <ul class="dk-dropdown__menu">
                    <template v-for="option in menuOptions" :key="option.key">
                        <li v-if="option.divided" role="separator" class="divided-placeholder"></li>
                        <li
                            class="dk-dropdown__option"
                            :class="{
                                'is-disabled': option.disabled,
                                'is-divided': option.divided,
                            }"
                            :id="`dk-dropdown__option-${option.key}`"
                            @click="($event) => handleOptionClick(option)">
                            {{ option.label }}
                        </li>
                    </template>
                </ul>
            </template>
        </Tooltip>
    </div>
</template>
<script setup lang="ts">
import { nextTick, ref } from 'vue'
import type { DropdownProps, DropdownEmits, MenuOption, DropdownExpose } from './types.ts'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { TooltipExpose } from '../Tooltip/types'
const props = withDefaults(defineProps<DropdownProps>(), {
    effect: 'light',
    trigger: 'click',
    placement: 'bottom',
    transition: 'fade',
    showAfter: 0,
    hideAfter: 0,
})

const emits = defineEmits<DropdownEmits>()

const tooltipRef = ref<TooltipExpose>()

const handleVisibeChange = (e: boolean) => {
    emits('visible-change', e)
}

const handleOptionClick = (option: MenuOption) => {
    if (option.disabled) {
        return
    }
    emits('select', option)
}

// nextTick(() => {
//     if (tooltipRef.value) {
//         defineExpose<DropdownExpose>({
//             tooltipRef: tooltipRef.value?.tooltipRef,
//             contentRef: tooltipRef.value?.contentRef,
//             onShow: tooltipRef.value!.onShow,
//             onHide: tooltipRef.value!.onHide
//         })
//     }
// })
</script>
<style scoped></style>
