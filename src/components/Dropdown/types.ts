import type { Ref, VNode } from 'vue'
import type { TooltipProps } from '../Tooltip/types'

export interface DropdownProps extends Omit<TooltipProps, 'content'| 'transition'> {
    menuOptions: MenuOption[]
    hideOnClick?: boolean,
}

export interface MenuOption {
    label: string | VNode
    key: string | number
    disabled?: boolean
    divided?: boolean
}

export interface DropdownEmits {
    (e: 'visible-change', value: boolean): void
    (e: 'select', value: MenuOption): void
}

export interface DropdownExpose {
    onShow: () => void
    onHide: () => void
}
