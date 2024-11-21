import type { App } from 'vue'
import Switch from './Switch.vue'

Switch.install = (app: App) => {
    app.component(Switch.name ?? 'DkSwitch', Switch)
}

export default Switch

export * from './types'
