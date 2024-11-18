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
                :readonly="isReadOnly"
                class="dk-select__tooltip-trigger"
                v-model="selectStates.inputValue"
                @focus="handleFocus"
                @input="debounceInputFilter"
                @keydown="handleKeydown"
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
                <div
                    class="dk-select--loading"
                    v-if="selectStates.loading">
                    <Icon
                        icon="spinner"
                        spin></Icon>
                </div>
                <ul
                    class="dk-select__menu"
                    v-else-if="filterOptions.length">
                    <template
                        v-for="(item, index) in filterOptions"
                        :key="index">
                        <li
                            class="dk-select__menu-item"
                            :class="{
                                'is-disabled': item.disabled,
                                'is-selected': selectStates.selectedOption?.value === item.value,
                                'is-highlight': selectStates.currentSelectedIndex === index,
                            }"
                            :id="`dk-select-item-${item.value}`"
                            @click.stop="selectOption(item)">
                            <Render
                                v-if="customLabel"
                                :vnode="customLabel ? customLabel(item) : item.label"></Render>
                            <span v-else>
                                {{ item.label }}
                            </span>
                        </li>
                    </template>
                </ul>
                <div
                    class="dk-select__nothing"
                    v-else>
                    <template v-if="remote"> No Data </template>
                    <template v-else> No matching data </template>
                </div>
            </template>
        </Tooltip>
    </div>
</template>
<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import type { SelectEmits, SelectOption, SelectProps, SelectStates } from './types'
import { debounce } from 'lodash-es'
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

const props = withDefaults(defineProps<SelectProps>(), {
    options: () => [],
})
const emits = defineEmits<SelectEmits>()

const inputRef = ref<InputExpose>()
const toolTipRef = ref<TooltipExpose>()

const isReadOnly = computed(() => {
    return !props.filterable || !dropdowShow.value
})

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
    loading: false,
    currentSelectedIndex: -1,
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

const remoteTimemout = computed(() => (props.remote ? 500 : 0))

const handleInputFilter = async (searchValue: string) => {
    if (!props.filterable) return
    // 自定义筛选规则
    if (props.filterMethod && typeof props.filterMethod === 'function') {
        filterOptions.value = props.filterMethod(searchValue)
        // 自定义远程搜索规则
    } else if (props.remote && props.remoteMethod && typeof props.remoteMethod === 'function') {
        selectStates.loading = true
        try {
            filterOptions.value = await props.remoteMethod(searchValue)
        } catch (e) {
            console.error(e)
            filterOptions.value = []
        } finally {
            selectStates.loading = false
        }
    }
    // 默认搜索规则
    else {
        filterOptions.value = props.options.filter((option) => option.label.includes(searchValue))
    }
    selectStates.currentSelectedIndex = -1
}

const handleFocus = async () => {
    if (props.filterable && props.remote && props.remoteMethod) {
        console.log('?')
        filterOptions.value = await props.remoteMethod('')
    }
}

const debounceInputFilter = debounce(handleInputFilter, remoteTimemout.value)

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
        if (props.filterable) {
            filterOptions.value = props.options
        }
        toolTipRef.value?.onShow()
    } else {
        if (selectStates.selectedOption) {
            selectStates.inputValue = selectStates.selectedOption.label
        }

        selectStates.currentSelectedIndex = -1
        toolTipRef.value?.onHide()
    }
}

const toggleDropdowShow = () => {
    if (props.disabled) return
    dropdowShow.value = !dropdowShow.value
    if (dropdowShow.value) {
        excuteManual(true)
        handleInputFilter(selectStates.inputValue)
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

const handleKeydown = (e: KeyboardEvent) => {
    switch (e.key) {
        case 'Enter':
            if (!dropdowShow.value) {
                toggleDropdowShow()
                handleInputFilter(selectStates.inputValue)
            } else {
                if (selectStates.currentSelectedIndex > -1 && filterOptions.value[selectStates.currentSelectedIndex]) {
                    selectOption(filterOptions.value[selectStates.currentSelectedIndex])
                } else {
                    toggleDropdowShow()
                }
            }
            break
        case 'Escape':
            if (dropdowShow.value) {
                toggleDropdowShow()
            }
            break
        case 'ArrowUp':
            e.preventDefault()
            if (filterOptions.value.length) {
                if (selectStates.currentSelectedIndex === -1 || selectStates.currentSelectedIndex === 0) {
                    selectStates.currentSelectedIndex = filterOptions.value.length - 1
                } else {
                    selectStates.currentSelectedIndex--
                }
            }
            break
        case 'ArrowDown':
            e.preventDefault()
            if (filterOptions.value.length) {
                if (
                    selectStates.currentSelectedIndex === -1 ||
                    selectStates.currentSelectedIndex === filterOptions.value.length - 1
                ) {
                    selectStates.currentSelectedIndex = 0
                } else {
                    selectStates.currentSelectedIndex++
                }
            }
            break
        default:
            break
    }
}
</script>
