import type { App } from 'vue'
import Message from './Message.vue'
import { DkMessage, closeAll } from './method'

Message.install = (app: App) => {
    app.component(Message.name ?? 'DkMessage', Message)
}

export default Message

export { DkMessage, closeAll }

export * from './types'
