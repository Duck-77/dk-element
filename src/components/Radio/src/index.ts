import type { App } from 'vue'
import Radio from './Radio.vue'
import RadioGroup from './RadioGroup.vue'

Radio.install = (app: App) => {
    app.component(Radio.name ?? 'DkRaio', Radio)
}

RadioGroup.install = (app: App) => {
    app.component(RadioGroup.name ?? 'DkRadioGroup', RadioGroup)
}

export default Radio

export { RadioGroup }

export * from './Radio'
export * from './RadioGroup'
