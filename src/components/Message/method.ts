import { render, h, nextTick, shallowReactive, reactive } from 'vue'
import type { MessageContext, MessageCreator } from './types'
import { usezIndex } from '@/hooks/usezIndex'
import Message from './Message.vue'

let lastMessageId = 1
const dkMessageContext: MessageContext[] = shallowReactive([])

export const createDkMessage: MessageCreator = (props) => {
    const id = `dk_message_${lastMessageId++}`
    const { next } = usezIndex()
    const container = document.createElement('div')
    const _props = {
        ...props,
        id,
        zIndex: next(),
        onDestory: () => {
            const index = dkMessageContext.findIndex((msg) => msg.id === id)
            if (index === -1) return
            dkMessageContext.splice(index, 1)
            render(null, container)
        },
    }

    const vnode = h(Message, _props)

    render(vnode, container)

    const message: MessageContext = {
        id,
        vnode: vnode,
        vm: vnode.component!,
        props: _props,
    }

    dkMessageContext.push(message)

    nextTick(() => {
        document.body.appendChild(container.firstElementChild!)
    })

    return message
}

export const closeAll = () => {
    dkMessageContext.forEach((message) => {
        message.props.onDestory()
    })
}

export const getLastMessage = () => {
    return dkMessageContext.at(-1)
}

export const getLastMessageBottomOffset = (id: number | string) => {
    const index = dkMessageContext.findIndex((msg) => msg.id === id)
    // console.log(`第${(id as string).replace('dk_message_', '')}个Message执行computed，它的上一个Message是第${index}个`)
    if (index <= 0) {
        return 0
    } else {
        const prev: MessageContext = dkMessageContext[index - 1]
        // console.log(`第${index}个的bottomOffset是`, prev.vm.exposed!.bottomOffset.value)
        return prev.vm.exposed!.bottomOffset.value
    }
}
