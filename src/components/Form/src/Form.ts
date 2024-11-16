import type { InjectionKey } from 'vue'
import type { ValidateError, ValidateFieldsError } from 'async-validator'
import type { FormItemContext, FormItemRule } from './FormItem'

export type FormRules = Record<string, FormItemRule[]>

export interface FormProps {
    model: Record<string, any>
    rules?: FormRules
    labelPosition?: 'left' | 'right' | 'top'
}

export interface FormContext extends FormProps {
    addField: (field: FormItemContext) => void
    removeField: (field: FormItemContext) => void
}

export interface FormValidateFailure {
    errors: ValidateError[] | null
    fields: ValidateFieldsError
}

export interface FormInstance {
    validate: () => Promise<any>
    resetFields: (keys: string[]) => void
    clearValidates: (keys: string[]) => void
}

export const formContextKey: InjectionKey<FormContext> = Symbol('form-context')
