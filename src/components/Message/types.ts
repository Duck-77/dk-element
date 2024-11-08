import type { ComponentInternalInstance, VNode } from 'vue'

export type MessageType = 'success' | 'warning' | 'info' | 'error'

export interface MessageProps {
    id: string | number
    message?: string | VNode
    duration?: number
    showClose?: boolean
    type?: MessageType
    offset?: number
    zIndex: number
    plain?: boolean
    icon?: string
    onDestory: () => void
}

export interface MessageContext {
    id: string | number
    vnode: VNode
    vm: ComponentInternalInstance
    props: MessageProps
    destory: () => void
}

export type MessageCreatorProps = Omit<MessageProps, 'onDestory' | 'id' | 'zIndex'>

export interface MessageCreator {
    (props: MessageCreatorProps): MessageContext
}
