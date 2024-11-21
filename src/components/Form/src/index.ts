import type { App } from 'vue'
import Form from './Form.vue'
import FormItem from './FormItem.vue'

Form.install = (app: App) => {
    app.component(Form.name ?? 'DkForm', Form)
}

FormItem.install = (app: App) => {
    app.component(FormItem.name ?? 'DkFormItem', FormItem)
}

export default Form
export { FormItem }

export * from './Form'
export * from './FormItem'
