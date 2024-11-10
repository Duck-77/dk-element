<template>
    <div class="dk-dropdown">
        <Tooltip
            ref="tooltipInstance"
            :manual="manual"
            :effect="effect"
            transition="drop"
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
                            <Render :vnode="option.label"></Render>
                        </li>
                    </template>
                </ul>
            </template>
        </Tooltip>
    </div>
</template>
<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import type { DropdownProps, DropdownEmits, MenuOption, DropdownExpose } from './types.ts'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { TooltipExpose } from '../Tooltip/types'
import Render from '../Common/Render.js'

defineOptions({
    name: 'DkDropdown',
})

const props = withDefaults(defineProps<DropdownProps>(), {
    effect: 'light',
    trigger: 'click',
    placement: 'bottom',
    showAfter: 0,
    hideAfter: 0,
    hideOnClick: true,
})

const emits = defineEmits<DropdownEmits>()

const tooltipInstance = ref<TooltipExpose>()

const handleVisibeChange = (e: boolean) => {
    emits('visible-change', e)
}

const handleOptionClick = (option: MenuOption) => {
    if (option.disabled) {
        return
    }
    if (props.hideOnClick) {
        tooltipInstance.value?.onHide()
    }
    emits('select', option)
}

const tooltipRef = computed(() => tooltipInstance.value?.tooltipRef as HTMLElement | undefined)
const contentRef = computed(() => tooltipInstance.value?.contentRef as HTMLElement | undefined)

defineExpose<DropdownExpose>({
    tooltipRef,
    contentRef,
    onShow: tooltipInstance.value!.onShow,
    onHide: tooltipInstance.value!.onHide,
})
</script>
<style scoped></style>
