export type RadioValueType = string | number | boolean | undefined
export type RadioSize = 'large' | 'defualt' | 'small'

export interface RadioProps {
    modelValue?: RadioValueType
    label?: string
    value?: RadioValueType
    size?: RadioSize
    name?: string
    border?: boolean
    disabled?: boolean
}

export interface RadioEmits {
    (e: 'update:modelValue', value: RadioValueType): void
    (e: 'change', value: RadioValueType): void
}
