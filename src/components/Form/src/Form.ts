import type { InjectionKey } from 'vue'
import type { ValidateError, ValidateFieldsError } from 'async-validator'
import type { FormItemContext, FormItemLabel, FormItemRule } from './FormItem'
import { Emitter } from '@/hooks/useEmitter'


export type FormRules = Record<string, FormItemRule[]>

export interface FormProps {
    model: Record<string, any>
    rules?: FormRules
    labelPosition?: 'left' | 'right' | 'top'
    labelWidth?: string | number
    hideRequiredAsterisk?: boolean
    requireAsteriskPosition?: 'left' | 'right'
    showMessage?: boolean
}

export interface FormContext extends FormProps {
    emitter: Emitter<EmitterProps>
    maxItemLabelWidth: number
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

export interface EmitterProps {
    addField: (field: FormItemContext) => void
    removeField: (field: FormItemContext) => void
    addItemLabel: (itemlabel: FormItemLabel) => void
    removeItemLabel: (itemlabel: FormItemLabel) => void
    [key: string]: (...args: any[]) => void
}

export const formContextKey: InjectionKey<FormContext> = Symbol('form-context')
