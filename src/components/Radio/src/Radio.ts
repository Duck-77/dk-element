export type RadioValueType = string | number | boolean | undefined

export interface RadioProps {
    modelValue?: RadioValueType
    label?: string
    value?: RadioValueType
    size?: 'small' | 'default' | 'large'
    name?: string
    disabled?: boolean
}

export interface RadioEmits {
    (e: 'update:modelValue', value: RadioValueType): void
    (e: 'change', value: RadioValueType): void
}
