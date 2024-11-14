import type { InjectionKey, Ref } from 'vue'

export interface RadioGroupProps {
    moduleValue: boolean
    size: 'larger' | 'defualt' | 'small'
    disabled: boolean
    name: string
    id: string
}

export interface RadioGroupEmits {
    (e: 'change', value: boolean): void
}

export interface RadioGroupContext {
    disabled: Ref<boolean>
    name: Ref<string>
}

export const radioGropContextKey: InjectionKey<RadioGroupContext> = Symbol('radio-group-context-key')
