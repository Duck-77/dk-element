import DkAlert from '@/components/Alert'
import DkButton from '@/components/Button'
import DkCollapse, { DkCollapseItem } from '@/components/Collapse'
import DkDropdown from '@/components/Dropdown'
import DkForm, { DkFornItem } from '@/components/Form/src'
import DkIcon from '@/components/Icon'
import DkInput from '@/components/Input'
import DkMessage, { createDkMessage, closeAll } from '@/components/Message'
import DkRadio, { DkRadioGroup } from '@/components/Radio/src'
import DkSelect from '@/components/Select'
import DkSwitch from '@/components/Switch'
import DkTooltip from '@/components/Tooltip'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, far)

import '@/styles/index.css'

const DkUIComponents = [
    DkAlert,
    DkButton,
    DkCollapse,
    DkCollapseItem,
    DkDropdown,
    DkForm,
    DkFornItem,
    DkIcon,
    DkInput,
    DkMessage,
    DkRadio,
    DkRadioGroup,
    DkSelect,
    DkSwitch,
    DkTooltip
]

const install = (app: import('vue').App): void => {
    DkUIComponents.forEach((component) => {
        app.component(component.name!, component)
    })
}

export {
    DkAlert,
    DkButton,
    DkCollapse,
    DkCollapseItem,
    DkDropdown,
    DkForm,
    DkFornItem,
    DkIcon,
    DkInput,
    DkMessage,
    DkRadio,
    DkRadioGroup,
    DkSelect,
    DkSwitch,
    DkTooltip,
    createDkMessage,
    closeAll,
    install
}

export default {
    install
}
