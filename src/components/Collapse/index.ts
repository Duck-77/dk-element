import type { App } from 'vue'
import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'

Collapse.install = (app: App) => {
    app.component(Collapse.name ?? 'DkCollapse', Collapse)
}

CollapseItem.install = (app: App) => {
    app.component(CollapseItem.name ?? 'DkCollapseItem', CollapseItem)
}

export default Collapse

export { CollapseItem }

export * from './types'
