import type { VNode } from 'vue'

export type MessageType = 'success' | 'warning' | 'info' | 'error'

export interface MessageProps {
    message?: string | VNode
    duration?: number
    showClose?: boolean
    type?: MessageType
}
