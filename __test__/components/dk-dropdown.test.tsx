import { describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Dropdown from '../../src/components/Dropdown/Dropdown.vue'
import Button from '../../src/components/Button/button.vue'

describe.skip('test::dk-dropdown', () => {
    describe.skip('basic', () => {
        test('1.options', async () => {
            vi.useFakeTimers()
            const menuOptions = [
                {
                    label: 'option1',
                    key: 1,
                    disabled: true,
                },
                {
                    label: 'option2',
                    key: 2,
                    divided: false,
                },
                {
                    label: 'option3',
                    key: 3,
                    divided: false,
                },
                {
                    label: 'option4',
                    key: 4,
                },
            ]
            const handlevisiChange = vi.fn(() => {
                console.log('visible-change')
            })
            const wrapper = mount(
                () => (
                    <div>
                        <div class='outer'></div>
                        <Dropdown
                            menuOptions={menuOptions}
                            trigger='click'
                            onVisible-change={handlevisiChange}>
                            <Button>click</Button>
                        </Dropdown>
                    </div>
                ),
                {
                    attachTo: document.body,
                }
            )
            console.log(wrapper.html())
            const btn = wrapper.get('.dk-button')
            expect(wrapper.find('.dk-dropdown__menu').exists()).toBeFalsy()
            btn.trigger('click')
            await vi.runAllTimers()
            expect(wrapper.find('.dk-tooltip__popper').exists()).toBeTruthy()
        })
    })
    describe.skip('props', () => {
        test('1.hide-on-click', () => {})
    })
    describe.skip('emits', () => {
        test('1.select', () => {})
        test('2.visible-change', () => {})
    })
    describe.skip('expose', () => {
        test('1.onShow', () => {})
        test('2.onHide', () => {})
    })
})
