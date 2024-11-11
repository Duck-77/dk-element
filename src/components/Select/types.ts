import type { VNode } from 'vue'

export type RenderLabelFunc = (option: SelectOption) => VNode
export type CustomFilterFunc = (value: string) => SelectOption[]
export type CustomRemoteFunc = (value: string) => Promise<SelectOption[]>

export interface SelectOption {
    label: string
    value: string
    disabled?: boolean
}

export interface SelectProps {
    modelValue: string
    options?: SelectOption[]
    placeholder?: string
    clearable?: boolean
    disabled?: boolean
    customLabel?: RenderLabelFunc
    filterable?: boolean
    filterMethod?: CustomFilterFunc
    remote?: boolean
    remoteMethod?: CustomRemoteFunc
}

export interface SelectStates {
    inputValue: string
    selectedOption: null | SelectOption
    selectHover: boolean
    loading:boolean
    currentSelectedIndex:number;
}

export interface SelectEmits {
    (e: 'change', value: string): void
    (e: 'visible-change', value: boolean): void
    (e: 'update:modelValue', value: string): void
    (e: 'clear'): void
}
