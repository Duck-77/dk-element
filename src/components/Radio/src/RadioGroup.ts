import type { InjectionKey, Ref } from 'vue'

import { type RadioValueType, type RadioSize } from './Radio'

export interface RadioGroupProps {
    modelValue: RadioValueType
    size?: RadioSize
    border?: boolean
    disabled?: boolean
    name?: string
    id?: string
}

export interface RadioGroupEmits {
    (e: 'update:modelValue', value: RadioValueType): void
    (e: 'change', value: RadioValueType): void
}

export interface RadioGroupContext {
    modelValue: RadioValueType
    border: boolean
    size: RadioSize
    disabled: boolean
    name: string
    changeEvent: (value: RadioGroupProps['modelValue']) => void
}

export const radioGroupContextKey: InjectionKey<RadioGroupContext> = Symbol('radio-group-context-key')
