import { defineComponent } from 'vue'
import type { PropType, VNode } from 'vue'

export default defineComponent({
    props: {
        vnode: {
            type: Object as PropType<string | VNode>,
            require: false,
        },
    },
    setup(props, { slots }) {
        return () => (slots.default ? slots.default() : props.vnode)
    },
})
