import type { Ref, InjectionKey } from 'vue'

export type NameType = string | number

export interface CollapseProps {
    modelValue: NameType[]
    accordion?: boolean
}

export interface CollapseItemProps {
    name: NameType
    title?: string
    disabled?: boolean
    center?: boolean
}
export interface CollapseContext {
    activeNames: Ref<NameType[]>
    handleItemClick: (item: NameType) => void
}

export interface CollapseEmits {
    (e: 'change', value: NameType[]): void
    (e: 'update:modelValue', value: NameType[]): void
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
