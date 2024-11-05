import type { Type } from '@/types'
import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'
export interface IconPoprs extends FontAwesomeIconProps {
    type?: Type
    color?: string
}
