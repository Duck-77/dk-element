import type { App } from 'vue'
import Tooltip from './Tooltip.vue'

Tooltip.install = (app: App) => {
    app.component(Tooltip.name ?? 'DkTooltip', Tooltip)
}

export default Tooltip

export * from './types'
