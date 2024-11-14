import type { InjectionKey, Ref } from 'vue'

import { type RadioValueType } from './Radio'

export interface RadioGroupProps {
    modelValue: RadioValueType
    size?: 'larger' | 'defualt' | 'small'
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
    disabled: boolean
    name: string
    changeEvent: (value: RadioGroupProps['modelValue']) => void
}

export const radioGroupContextKey: InjectionKey<RadioGroupContext> = Symbol('radio-group-context-key')
