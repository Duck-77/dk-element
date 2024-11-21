import type { App } from 'vue'
import Select from './Select.vue'

Select.install = (app: App) => {
    app.component(Select.name ?? 'DkSelect', Select)
}

export default Select

export * from './types'
