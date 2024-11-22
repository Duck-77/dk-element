import type { Plugin, App, Component } from 'vue'

export const withInstall = <T extends Component>(component: T) => {
    ;(component as T & Plugin).install = (app: App) => {
        app.component(component.name as string, component)
    }
    return component as T & Plugin
}
