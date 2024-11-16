import type { RuleItem } from 'async-validator'
import type { InjectionKey } from 'vue'

export interface FormItemProps {
    label: string
    prop?: string
}

export interface FormItemRule extends RuleItem {
    trigger?: string
}

export interface FormItemContext {
    prop: string
    validate: (trigger?: FormItemRule['trigger']) => any
    clearValidate: () => void
    resetField: () => void
}

export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('form-item-context')
