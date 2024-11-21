import type { App } from 'vue'
import Alert from './components/Alert'
import Button from './components/Button'
import Collapse from './components/Collapse'
import CollapseItem from './components/Collapse'
import Dropdown from './components/Dropdown'
import Form from './components/Form/src'
import { FormItem } from './components/Form/src'
import Icon from './components/Icon'
import Input from './components/Input'
import Message from './components/Message'
import { DkMessage, closeAll } from './components/Message'
import Radio from './components/Radio/src'
import RadioGroup from './components/Radio/src/RadioGroup.vue'
import Select from './components/Select'
import Switch from './components/Switch'
import Tooltip from './components/Tooltip'

const dkUIComponents = [
    Alert,
    Button,
    Collapse,
    CollapseItem,
    Dropdown,
    Form,
    FormItem,
    Icon,
    Input,
    Message,
    Radio,
    RadioGroup,
    Select,
    Switch,
    Tooltip,
]

const install = (app: App) => {
    dkUIComponents.forEach((component) => {
        app.component(component.name!, component)
    })
}

export {
    Alert,
    Button,
    Collapse,
    CollapseItem,
    Dropdown,
    Form,
    FormItem,
    Icon,
    Input,
    Message,
    DkMessage,
    closeAll,
    Radio,
    RadioGroup,
    Select,
    Switch,
    Tooltip,
    install,
}

export default {
    install,
}
