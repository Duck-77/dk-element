import type { RuleItem } from 'async-validator'
import type { ComputedRef, InjectionKey, Ref } from 'vue'
import type { FormRules } from './Form'

export interface FormItemProps {
    prop?: string
    label: string
    labelPosition?: 'left' | 'right' | 'top'
    labelWidth?: string | number
    required?: boolean
    rules?: FormRules
    error?: string
    showMessage?: boolean
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

export interface FormItemLabel {
    prop: string
    labelRef: HTMLLabelElement
}

export interface FormItemInstance {
    validateStatus: ValidateStatusProps
    validate: (trigger?: FormItemRule['trigger']) => Promise<any>
    clearValidate: () => void
    resetField: () => void
}

export interface FormItemEmits {}

export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('form-item-context')
