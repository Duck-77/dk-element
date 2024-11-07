import type { Ref, VNode } from 'vue'
import type { TooltipProps } from '../Tooltip/types'

export interface DropdownProps extends Omit<TooltipProps,'content'> {
    menuOptions: MenuOption[]
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
    tooltipRef: Ref<undefined | HTMLElement>
    contentRef: Ref<undefined | HTMLElement> | undefined
    onShow: () => void
    onHide: () => void
}
