import type { InjectionKey } from 'vue'

export interface FormItemProps {
    label: string
    prop?: string
}

export interface FormItemContext {
    validate: () => any
}

export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('form-item-context')
