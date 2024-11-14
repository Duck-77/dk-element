export interface RadioProps {
    moduleValue: boolean
    label: string
    value: string
    size: 'small' | 'default' | 'large'
    name: string
    disabled: boolean
}

export interface RadioEmits {
    (e: 'change', value: boolean): void
}
