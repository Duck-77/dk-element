export type AlertType = 'success' | 'warning' | 'info' | 'error'
export type AlertEffect = 'light' | 'dark'

export interface AlertProps {
    type: AlertType
    title?: string
    content?: string
    showIcon?: boolean
    closeIcon?: string
    closeable?: boolean
    titleCenter?: boolean
    contentCenter?: boolean
    effect?: AlertEffect
}

export interface AlertEmits {
    (e: 'close', value?: any): void
}
