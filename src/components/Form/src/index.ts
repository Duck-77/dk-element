import Form from './Form.vue'
import FormItem from './FormItem.vue'
import { withInstall } from '@/utils/install'

const DkForm = withInstall(Form)
const DkFornItem = withInstall(FormItem)

export default DkForm
export { DkFornItem }
export * from './Form'
export * from './FormItem'
