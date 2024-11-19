import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'
import Icon from '../../src/components/Icon/Icon.vue'

describe('test::dk-input', () => {
    describe('basic', () => {
        test('1.测试 图标', () => {
            const wrapper = mount(Icon, {
                props: {
                    icon: 'hand',
                },
                global: {
                    stubs: ['font-awesome-icon'],
                },
            })

            const fontawsome = wrapper.find('font-awesome-icon-stub')
            expect(fontawsome.exists()).toBeTruthy()

            expect(fontawsome.attributes('icon')).toBe('hand')
        })

        test('2.测试 fontawesome 属性', () => {
            const wrapper = mount(Icon, {
                props: {
                    icon: 'spinner',
                    spin: true,
                    border: true,
                    size: '2x',
                },
                global: {
                    stubs: ['font-awesome-icon'],
                },
            })

            const fontawesome = wrapper.find('font-awesome-icon-stub')
            expect(fontawesome.exists()).toBeTruthy()

            expect(fontawesome.attributes('border')).toBeTruthy()
            expect(fontawesome.attributes('spin')).toBeTruthy()
            expect(fontawesome.attributes('size')).toBe('2x')
        })

        describe('3.测试 Icon Props', () => {
            it('1.type', () => {
                const wrapper = mount(Icon, {
                    props: {
                        icon: 'xmark',
                        type: 'primary',
                    },
                    global: {
                        stubs: ['font-awesome-icon'],
                    },
                })

                const icon = wrapper.find('.dk-icon')
                expect(icon.exists()).toBeTruthy()

                expect(icon.classes('dk-icon-primary')).toBeDefined()
                wrapper.setProps({ type: 'danger' })
                expect(icon.classes('dk-icon-danger')).toBeDefined()
            })

            it('2.color', () => {
                const wrapper = mount(Icon, {
                    props: {
                        icon: 'xmark',
                        color: 'springgreen',
                    },
                    global: {
                        stubs: ['font-awesome-icon'],
                    },
                })

                expect(wrapper.props('color')).toBe('springgreen')
                expect(wrapper.element.style['color']).toBe('springgreen')

                const style = window.getComputedStyle(wrapper.element)
                expect(style['color']).toBe('rgb(0, 255, 127)') //springgreen
            })
        })
    })
})
