import Message from './Message.vue'
import { createDkMessage, closeAll } from './method'
import { withInstall } from '@/utils/install'

const DkMessage = withInstall(Message)

export default DkMessage
export { createDkMessage, closeAll }
export * from './types'
