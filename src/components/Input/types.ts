import type { CSSProperties } from 'vue'

export interface InputProps {
    modelValue: string
    type?: string
    size?: 'large' | 'small'
    disabled?: boolean
    clearable?: boolean
    showPassword?: boolean
    placeholder?: string
    readonly?: boolean
    autocomplete?: string
    autofocus?: boolean
    form?: string
    inputStyle?: CSSProperties
}

export interface InputEmits {
    (e: 'update:modelValue', value: string): void
    (e: 'input', value: string): void
    (e: 'change', value: string): void
    (e: 'focus', value: FocusEvent): void
    (e: 'blur', value: FocusEvent): void
    (e: 'clear'): void
}

export interface InputExpose{
    ref:HTMLInputElement | HTMLTextAreaElement | undefined
    blur: ()=>void
    clear: ()=>void
    focus: ()=>void
    select: ()=>void
}
