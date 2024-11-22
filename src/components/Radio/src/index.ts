import Radio from './Radio.vue'
import RadioGroup from './RadioGroup.vue'
import { withInstall } from '@/utils/install'

const DkRadio = withInstall(Radio)
const DkRadioGroup = withInstall(RadioGroup)

export default DkRadio
export { DkRadioGroup }
export * from './Radio'
export * from './RadioGroup'
