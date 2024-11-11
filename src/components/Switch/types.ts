import type { CSSProperties } from 'vue'

export type SwitchValue = boolean | string | number

export interface SwtichProps {
    id?: string
    name?: string
    modelValue: SwitchValue
    icon?: string
    size?: 'small' | 'large'
    loading?: boolean
    disabled?: boolean
    activeValue?: SwitchValue
    inactiveValue?: SwitchValue
    activeText?: string
    inactiveText?: string
    style?: CSSProperties
    activeActionIcon?: string
    inactiveActionIcon?: string
    beforeChange?: () => Promise<boolean>
}

export interface SwitchEmits {
    (e: 'change', value: SwitchValue): void
    (e: 'update:modelValue', value: SwitchValue): void
}
