import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'
import { withInstall } from '@/utils/install'

const DkCollapse = withInstall(Collapse)
const DkCollapseItem = withInstall(CollapseItem)

export default DkCollapse
export { DkCollapseItem }
export * from './types'
