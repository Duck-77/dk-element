import type { RuleItem } from 'async-validator'
import type { InjectionKey } from 'vue'

export interface FormItemProps {
    label: string
    prop?: string
    labelPosition?: 'left' | 'right' | 'top'
}

export interface FormItemRule extends RuleItem {
    trigger?: string
}

export interface ValidateStatusProps {
    state: 'init' | 'success' | 'error'
    errorMessage: string
    loading: boolean
}

export interface FormItemContext {
    prop: string
    validate: (trigger?: FormItemRule['trigger']) => Promise<any>
    clearValidate: () => void
    resetField: () => void
}

export interface FormItemInstance {
    validateStatus: ValidateStatusProps
    validate: (trigger?: FormItemRule['trigger']) => Promise<any>
    clearValidate: () => void
    resetField: () => void
}

export interface FormItemEmits {}

export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('form-item-context')
