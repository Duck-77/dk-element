import { mount, type VueWrapper } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { beforeEach } from 'vitest'
import Button from '../../src/components/Button/Button.vue'
import Tooltip from '../../src/components/Tooltip/Tooltip.vue'

describe('test::dk-tooltip', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
        vi.useFakeTimers()
        wrapper = mount(
            () => (
                <div>
                    <div class='outer-btn'></div>
                    <Tooltip
                        content='tooltip'
                        trigger='click'>
                        <Button>click</Button>
                    </Tooltip>
                </div>
            ),
            {
                attachTo: document.body,
            }
        )
    })
    test('tooltip should visible when click', async () => {
        const btn = wrapper.get('.dk-button')
        expect(wrapper.find('.dk-tooltip__popper').exists()).toBeFalsy()
        btn.trigger('click')
        await vi.runAllTimers()
        console.log(wrapper.html())
        expect(wrapper.find('.dk-tooltip__popper').exists()).toBeTruthy()
    })

    test('tooltip should invisible when click outer', async () => {
        const btn = wrapper.get('.dk-button')
        expect(wrapper.find('.dk-tooltip__popper').exists()).toBeFalsy()
        btn.trigger('click')
        await vi.runAllTimers()
        expect(wrapper.find('.dk-tooltip__popper').exists()).toBeTruthy()
        const outerbtn = wrapper.get('.outer-btn')
        outerbtn.trigger('click')
        await vi.runAllTimers()
        expect(wrapper.find('.dk-tooltip__popper').exists()).toBeFalsy()
    })
})
