import './styles/index.css'

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

/** fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
