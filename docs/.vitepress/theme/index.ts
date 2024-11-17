import DefaultTheme from 'vitepress/theme'

/** styles */
import '../../../src/styles/index.css'
import './custom.css'

/** fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

/** vitepress-demo-preview */
import '@vitepress-demo-preview/component/dist/style.css'
import { AntDesignContainer, ElementPlusContainer, NavieUIContainer } from '@vitepress-demo-preview/component'

library.add(fas, far)

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('demo-preview', AntDesignContainer)
    },
}
