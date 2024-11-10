export interface InputProps {
    type?: string
    size?: 'large' | 'small'
    disabled?: boolean
    clearable?: boolean
    showPassword?: boolean
    placeholder?: string
    modelValue: string
}

export interface InputEmits {
    (e: 'update:modelValue', value: string): void
    (e: 'input', value: string): void
    (e: 'change', value: string): void
    (e: 'focus', value: FocusEvent): void
    (e: 'blur', value: FocusEvent): void
    (e: 'clear'): void
}
