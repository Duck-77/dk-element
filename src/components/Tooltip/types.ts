import type { Placement, Options } from '@popperjs/core'
import type { Ref } from 'vue'

export type Trigger = 'hover' | 'click'

export interface TooltipProps {
    content?: string
    triiger?: Trigger
    placement?: Placement
    manual?: boolean
    popperOptions?: Partial<Options>
    transition?: string
}

export interface Toggle {
    (): void
    open: () => void
    close: () => void
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
