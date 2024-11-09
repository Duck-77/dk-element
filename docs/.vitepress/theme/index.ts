import DefaultTheme from "vitepress/theme";

/** styles */
import "../../../src/styles/index.css"

/** fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


export default DefaultTheme