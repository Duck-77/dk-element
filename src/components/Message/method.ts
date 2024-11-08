import { render, h, nextTick, shallowReactive, reactive } from 'vue'
import type { MessageCreatorProps, MessageContext } from './types'
import Message from './Message.vue'

let lastMessageId = 1
const DkMessageContext:MessageContext[] = shallowReactive([])

export const DkMessage = (props: MessageCreatorProps) => {
    const id = `dk_message_${lastMessageId++}`
    const container = document.createElement('div')
    const _props = {
        ...props,
        id,
        onDestory: () => {
            const index = DkMessageContext.findIndex((msg) => msg.id === id)
            if (index === -1) return
            DkMessageContext.splice(index, 1)
            render(null, container)
        },
    }
    const vnode = h(Message, _props)

    render(vnode, container)

    const message = {
        id,
        vnode: vnode,
        vm: vnode.component!,
        props: _props,
    }

    DkMessageContext.push(message)

    nextTick(() => {
        document.body.appendChild(container.firstElementChild!)
    })

    return DkMessageContext
}

export const getLastMessage = () => {
    return DkMessageContext.at(-1)
}

export const getLastMessageBottomOffset = (id: number | string) => {
    const index = DkMessageContext.findIndex((msg) => msg.id === id)
    // if (index > 0) {
    //     console.log(
    //         id,
    //         '-find_index:',
    //         index,
    //         '-find_prev.vm:',
    //         typeof DkMessageContext[index - 1].vm,
    //         '-find_prev.vm-->bottomOffset',
    //         DkMessageContext[index - 1].vm.exposed!.bottomOffset.value
    //     )
    // }
    if (index <= 0) {
        return 0
    } else {
        const prev: MessageContext = DkMessageContext[index - 1]
        return prev.vm.exposed!.bottomOffset.value
    }
}
