import { computed, defineComponent, Fragment, onMounted, ref } from 'vue'
import type { PropType, Ref } from 'vue'
import type { Placement, Options } from '@popperjs/core'
import type { DropdownExpose, MenuOption } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { TooltipExpose } from '../Tooltip/types'

export default defineComponent({
    name: 'DkDropdown',
    props: {
        placement: {
            type: String as PropType<Placement>,
            default: 'bottom',
        },
        trigger: {
            type: String as PropType<'hover' | 'click'>,
            default: 'click',
        },
        transition: {
            type: String,
            default: 'fade',
        },
        showTimout: {
            type: Number,
            default: 0,
        },
        hideTimout: {
            type: Number,
            default: 0,
        },
        popperOptions: {
            type: Object as PropType<Options>,
        },
        menuOptions: {
            type: Array as PropType<MenuOption[]>,
            require: true,
        },
        hideOnClick: {
            type: Boolean,
            default: true,
        },
        effect: {
            type: String as PropType<'dark' | 'light'>,
            default: 'dark',
        },
        manual: {
            type: Boolean,
        },
    },
    emits: {
        'visibe-change': (value: boolean) => typeof value === 'boolean',
        select: (value: MenuOption) => true,
    },
    setup(props, { slots, emit, expose }) {
        const tooltipInstance = ref<TooltipExpose>()

        const handleVisibleChange = (e: boolean) => {
            emit('visibe-change', e)
        }

        const handleOptionClick = (option: MenuOption) => {
            if (option.disabled) {
                return
            }
            if (props.hideOnClick) {
                tooltipInstance.value?.onHide()
            }
            emit('select', option)
        }

        const renderOptions = computed(() => {
            return props.menuOptions!.map((option) => (
                <Fragment key={option.key}>
                    {option.divided && <li role='separator' class='divided-placeholder'></li>}
                    <li
                        class={`dk-dropdown__option ${option.disabled && 'is-disabled'} ${
                            option.divided && 'is-divided'
                        }`}
                        id={`dk-dropdown__option-${option.key}`}
                        onClick={() => handleOptionClick(option)}>
                        {option.label}
                    </li>
                </Fragment>
            ))
        })

        const tooltipRef = computed(() => tooltipInstance.value?.tooltipRef as HTMLElement | undefined)
        const contentRef = computed(() => tooltipInstance.value?.contentRef as HTMLElement | undefined)

        expose<DropdownExpose>({
            tooltipRef,
            contentRef,
            onHide: () => tooltipInstance.value?.onHide(),
            onShow: () => tooltipInstance.value?.onShow(),
        })

        return () => (
            <div class='dk-dropdown'>
                <Tooltip
                    ref={tooltipInstance}
                    manual={props.manual}
                    effect={props.effect}
                    transition={props.transition}
                    trigger={props.trigger}
                    placement={props.placement}
                    popperOptions={props.popperOptions}
                    showAfter={props.showTimout}
                    hideAfter={props.hideTimout}
                    onVisible-change={handleVisibleChange}>
                    {{
                        default: () => slots.default && slots.default(),
                        content: () => <ul class='dk-dropdown__menu'>{renderOptions.value}</ul>,
                    }}
                </Tooltip>
            </div>
        )
    },
})
