import type { Placement, Options } from '@popperjs/core'
import type { Ref } from 'vue'

export type Trigger = 'hover' | 'click'
export type TooltipEffect = 'light' | 'dark'

export interface TooltipProps {
    content?: string
    trigger?: Trigger
    placement?: Placement
    manual?: boolean
    popperOptions?: Partial<Options>
    transition?: string
    showAfter?: number
    hideAfter?: number
    effect?: TooltipEffect
}

export interface Toggle {
    (): void
    show: () => void
    hide: () => void
}

export interface TooltipEmits {
    (e: 'visible-change', value: boolean): void
}

export interface TooltipExpose {
    tooltipRef: Ref<undefined | HTMLElement>
    contentRef: Ref<undefined | HTMLElement>
    onOpen: () => void
    onClose: () => void
}
