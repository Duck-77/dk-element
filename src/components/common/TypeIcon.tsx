import { defineComponent, type PropType } from 'vue'
import Icon from '../Icon/Icon.vue'

type IconType = 'success' | 'warning' | 'info' | 'error'

export default defineComponent({
    name: 'Type-Icon',
    props: {
        type: {
            // 允许自定义icon
            type: String as PropType<IconType | String>,
            required: true,
        },
    },

    setup(props) {
        const map = new Map()
        map.set('success', 'circle-check')
        map.set('info', 'circle-info')
        map.set('warning', 'circle-exclamation')
        map.set('error', 'circle-xmark')

        return () => <Icon icon={map.get(props.type)}></Icon>
    },
})
