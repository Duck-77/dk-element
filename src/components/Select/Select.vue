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
                :readonly="!filterable || !dropdowShow"
                class="dk-select__tooltip-trigger"
                v-model="selectStates.inputValue"
                @input="handleInputFilter"
                :disabled="disabled"
                :placeholder="filterPlaceholder">
                <template #suffix>
                    <span class="dk-select__icon">
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
                            v-else>
                        </Icon>
                    </span>
                </template>
            </Input>

            <template #content>
                <ul class="dk-select__menu">
                    <template v-for="(item, index) in filterOptions" :key="index" v-if="filterOptions.length">
                        <li
                            class="dk-select__menu-item"
                            :class="{
                                'is-disabled': item.disabled,
                                'is-selected': selectStates.selectedOption?.value === item.value,
                            }"
                            :id="`dk-select-item-${item.value}`"
                            @click.stop="selectOption(item)">
                            <Render v-if="customLabel" :vnode="customLabel ? customLabel(item) : item.label"></Render>
                            <span v-else>
                                {{ item.label }}
                            </span>
                        </li>
                    </template>
                    <template v-else>
                        <div class="dk-select__filter-nothing">No matching data</div>
                    </template>
                </ul>
            </template>
        </Tooltip>
    </div>
</template>
<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
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


const initialOption = findOption()

const selectStates = reactive<SelectStates>({
    inputValue: props.modelValue,
    selectedOption: initialOption,
    selectHover: false,
})

const filterOptions = ref(props.options)
watch(
    () => props.options,
    (cur) => {
        filterOptions.value = cur
    }
)

const filterPlaceholder = computed(() => {
    if (dropdowShow.value && selectStates.selectedOption) {
        return selectStates.selectedOption.label
    } else {
        return props.placeholder
    }
})

const handleInputFilter = (searchValue: string) => {
    console.log(searchValue)
    if (!props.filterable) return
    if (props.filterMethod && typeof props.filterMethod === 'function') {
        filterOptions.value = props.filterMethod(searchValue)
    } else {
        filterOptions.value = props.options.filter((option) => option.label.includes(searchValue))
    }
}

const dropdowShow = ref(false)

const clearButtonShow = computed(() => {
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

const excuteManual = (next: boolean) => {
    if (next) {
        if (selectStates.selectedOption) {
            selectStates.inputValue = ''
        }
        if (props.filterable){
            filterOptions.value = props.options
        }
        toolTipRef.value?.onShow()
    } else {
        if (selectStates.selectedOption) {
            selectStates.inputValue = selectStates.selectedOption.label
        }
        toolTipRef.value?.onHide()
    }
}

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
