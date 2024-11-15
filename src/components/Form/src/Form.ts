import type { InjectionKey } from 'vue'

export interface FormProps {
    model: Record<string, any>
    rules: Record<string, any>
}

export interface FormContext extends FormProps {}

export const formContextKey: InjectionKey<FormContext> = Symbol('form-context-key')
