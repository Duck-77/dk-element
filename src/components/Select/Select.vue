<template>
    <div
        class="dk-select"
        :class="{
            'is-disabled': disabled,
        }"
        @click="toggleDropdowShow"
        @mouseenter="selectStates.selectHover = true"
        @mouseleave="selectStates.selectHover = false">
        <Tooltip
            ref="toolTipRef"
            effect="light"
            :popper-options="popperOptions"
            placement="bottom-start"
            manual
            @click-outside="toggleDropdowShow">
            <Input
                ref="inputRef"
                readonly
                class="dk-select__tooltip-trigger"
                v-model="selectStates.inputValue"
                :disabled="disabled"
                :placeholder="placeholder">
                <template #suffix>
                    <Icon
                        class="dk-select__clear"
                        icon="fa-regular fa-circle-xmark"
                        @mousedown.prevent="() => {}"
                        @click.stop="handleClear"
                        v-if="clearButtonShow"></Icon>
                    <Icon
                        class="dk-select__angle-down"
                        :class="{
                            'is-active': dropdowShow,
                        }"
                        icon="angle-down"
                        v-else></Icon>
                </template>
            </Input>

            <template #content>
                <ul class="dk-select__menu">
                    <template v-for="(item, index) in options" :key="index">
                        <li
                            class="dk-select__menu-item"
                            :class="{
                                'is-disabled': item.disabled,
                                'is-selected': selectStates.selectedOption?.value === item.value,
                            }"
                            :id="`dk-select-item-${item.value}`"
                            @click.stop="selectOption(item)">
                            <Render :vnode="customLabel ? customLabel(item) : item.label"></Render>
                            {{ item.label }}
                        </li>
                    </template>
                </ul>
            </template>
        </Tooltip>
    </div>
</template>
<script setup lang="ts">
import { computed, reactive, ref, watchEffect } from 'vue'
import type { SelectEmits, SelectOption, SelectProps, SelectStates } from './types'
import type { TooltipExpose } from '../Tooltip/types'
import type { InputExpose } from '../Input/types'
import Tooltip from '../Tooltip/Tooltip.vue'
import Input from '../Input/Input.vue'
import Icon from '../Icon/Icon.vue'
import Render from '../Common/Render'


defineOptions({
    name: 'DkSelect',
})

const findOption = () => {
    const option = props.options.find((item) => item.value === props.modelValue)
    return option ? option : null
}

const props = defineProps<SelectProps>()
const emits = defineEmits<SelectEmits>()

const inputRef = ref<InputExpose>()
const toolTipRef = ref<TooltipExpose>()

// 调整dorpdown与input宽度一致
const popperOptions: any = {
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 9],
            },
        },
        {
            name: 'sameWidth',
            enabled: true,
            phase: 'beforeWrite',
            requires: ['computeStyles'],
            fn: ({ state }: { state: any }) => {
                state.styles.popper.width = `${state.rects.reference.width}px`
            },
            effect: ({ state }: { state: any }) => {
                state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`
            },
        },
    ],
}

// 初始inputValue对应的选项
const initialOption = findOption()

// 用于保存select中的各种状态
const selectStates = reactive<SelectStates>({
    inputValue: props.modelValue,
    selectedOption: initialOption,
    selectHover: false,
})

const dropdowShow = ref(false)

const clearButtonShow = computed(() => {
    // 移入显示清空图标：1.clearable 2.存在已选项 3.inputValue不为空
    return (
        props.clearable &&
        selectStates.selectHover &&
        selectStates.selectedOption &&
        selectStates.inputValue.trim() !== ''
    )
})

const handleClear = () => {
    selectStates.inputValue = ''
    selectStates.selectedOption = null
    emits('clear')
    emits('change', '')
    emits('update:modelValue', '')
}

// 用于手动执行tooltip暴露的方法
const excuteManual = (next: boolean) => {
    if (next) {
        toolTipRef.value?.onShow()
    } else {
        toolTipRef.value?.onHide()
    }
}

// 用于切换dorpdow的显示状态
const toggleDropdowShow = () => {
    if (props.disabled) return
    dropdowShow.value = !dropdowShow.value
    if (dropdowShow.value) {
        excuteManual(true)
    } else {
        excuteManual(false)
    }
    emits('visible-change', dropdowShow.value)
}

const selectOption = (e: SelectOption) => {
    if (e.disabled) return
    selectStates.inputValue = e.label
    selectStates.selectedOption = e
    emits('change', e.label)
    emits('update:modelValue', e.label)
    inputRef.value?.focus()
    toggleDropdowShow()
}
</script>
