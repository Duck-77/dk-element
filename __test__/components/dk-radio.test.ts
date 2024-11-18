import { beforeEach, describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Switch from '../../src/components/Switch/Switch.vue'
import { nextTick } from 'process'
import { afterEach } from 'node:test'

describe('test::dk-radio', () => {
    describe('basic', () => {
        test('1.测试 v-model ', async () => {
            const wrapper = mount(Switch, {
                props: {
                    modelValue: false,
                    'onUpade:modelValue': (e: any) => wrapper.setProps({ modelValue: e }),
                },
            })

            const radioInput = wrapper.get('input')
            const dom = wrapper.find('.dk-switch')
            expect(dom.exists()).toBeTruthy()
            expect(wrapper.props('modelValue')).toBeFalsy()
        })

        test('2.测试 click', async () => {
            const wrapper = mount(Switch, {
                props: {
                    modelValue: false,
                    'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e }),
                },
            })

            const radioInput = wrapper.get('input')
            const coreButton = wrapper.find('.dk-switch__core')

            expect(coreButton.exists()).toBeTruthy()
            expect(wrapper.props('modelValue')).toBeFalsy()

            await coreButton.trigger('click')
            expect(wrapper.props('modelValue')).toBeTruthy()
        })
    })

    describe('props', () => {
        test('1.测试 icon', () => {
            const wrapper = mount(Switch, {
                props: {
                    modelValue: false,
                    'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e }),
                    icon: 'hand',
                },
                global: {
                    stubs: ['Icon'],
                },
            })

            const icon = wrapper.find('.dk-switch__core-action-icon')
            expect(icon.exists()).toBeTruthy()
            expect(icon.attributes('icon')).toBe('hand')
        })

        test('2.测试 activeIcon和inactiveIcon', async () => {
            const wrapper = mount(Switch, {
                props: {
                    modelValue: false,
                    'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e }),
                    activeActionIcon: 'hand',
                    inactiveActionIcon: 'xmark',
                },
                global: {
                    stubs: ['Icon'],
                },
                attachTo: document.body,
            })

            let icon = wrapper.find('.dk-switch__core-action-icon')
            expect(icon.exists()).toBeTruthy()
            expect(icon.attributes('icon')).toBe('xmark')

            const coreButton = wrapper.get('.dk-switch__core')

            await coreButton.trigger('click')
            icon = wrapper.find('.dk-switch__core-action-icon')
            expect(icon.attributes('icon')).toBe('hand')
        })

        test('3.测试 loading', () => {
            const wrapper = mount(Switch, {
                props: {
                    modelValue: false,
                    'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e }),
                    loading: true,
                },
                global: {
                    stubs: ['Icon'],
                },
                attachTo: document.body,
            })

            expect(wrapper.props('loading')).toBeTruthy()
            expect(wrapper.classes()).toContain('is-loading')

            const icon = wrapper.find('.dk-switch__core-action-loading')
            expect(icon.exists()).toBeTruthy()
            expect(icon.attributes('icon')).toBe('spinner')
        })

        test('4.测试 inactiveText和activeText', async () => {
            const wrapper = mount(Switch, {
                props: {
                    modelValue: false,
                    'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e }),
                    activeText: 'on',
                    inactiveText: 'off',
                },
                global: {
                    stubs: ['Icon'],
                },
                attachTo: document.body,
            })

            let innerText = wrapper.find('.dk-switch__core-inner-text')
            expect(innerText.exists()).toBeTruthy()
            expect(innerText.text()).toBe('off')

            const coreButton = wrapper.get('.dk-switch__core')
            await coreButton.trigger('click')
            innerText = wrapper.find('.dk-switch__core')
            expect(innerText.text()).toBe('on')
        })

        test('5.测试 inactiveValue和activeValue', async () => {
            const wrapper = mount(Switch, {
                props: {
                    modelValue: false,
                    activeValue: 'on',
                    inactiveValue: 'off',
                    'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e }),
                },
                global: {
                    stubs: ['Icon'],
                },
                attachTo: document.body,
            })

            nextTick(() => {
                expect(wrapper.props('modelValue')).toBe('off')

                const coreButton = wrapper.get('.dk-switch__core')
                coreButton.trigger('click').then(() => {
                    expect(wrapper.props('modelValue')).toBe('on')
                })
            })
        })

        beforeEach(() => {
            vi.useFakeTimers()
        })

        afterEach(() => {
            vi.restoreAllMocks()
        })

        test('6.测试 beforeChange', async () => {
            const beforeChange = vi.fn(() => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        reject(false)
                    }, 500)
                })
            })

            const wrapper = mount(Switch, {
                props: {
                    modelValue: false,
                    'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e }),
                    beforeChange: beforeChange as any,
                },
                global: {
                    stubs: ['Icon'],
                },
                attachTo: document.body,
            })

            const coreButton = wrapper.find('.dk-switch__core')
            expect(coreButton.exists()).toBeTruthy()
            await coreButton.trigger('click')
            expect(wrapper.props('modelValue')).toBeFalsy()

            vi.advanceTimersByTime(1000)

            expect(beforeChange).toHaveBeenCalledTimes(1)
            expect(wrapper.props('modelValue')).toBeFalsy()
            try {
                beforeChange()
                vi.advanceTimersByTime(1000)
            } catch (e) {
                expect(e).toBe(false)
            }
            expect(beforeChange).toHaveBeenCalledTimes(2)
        })
    })
})
