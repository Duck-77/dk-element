import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../src/components/Button/Button.vue'

describe('compontent', () => {
    describe('Button.vue', () => {
        test('basic button', () => {
            const wrapper = mount(Button, {
                props: {
                    type: 'primary',
                },
                slots: {
                    default: 'basic button',
                },
            })
            expect(wrapper.classes()).toContain('dk-button--primary')
            expect(wrapper.get('button').element.type).toBe('button')
            expect(wrapper.get('button').text()).toBe('basic button')
        })

        test('button should have attribute', () => {
            const wrapper = mount(Button, {
                props: {
                    type: 'warning',
                    disabled: true,
                },
                slots: {
                    default: 'attribute',
                },
            })
            expect(wrapper.attributes('disabled')).toBeDefined()
            expect(wrapper.get('button').element.disabled).toBeTruthy()     
        })

        test('button can emit click', () => {
            const wrapper = mount(Button, {
                props: {
                    type: 'warning',
                },
                slots: {
                    default: 'attribute',
                },
            })

            wrapper.get('button').trigger('click')
            expect(wrapper.emitted()).toHaveProperty('click')
        })

        test('button didnt click if disabled', () => {
            const wrapper = mount(Button, {
                props: {
                    type: 'warning',
                    disabled: true,
                },
                slots: {
                    default: 'attribute',
                },
            })
            expect(wrapper.attributes('disabled')).toBeDefined()
            wrapper.get('button').trigger('click')
            expect(wrapper.emitted()).not.toHaveProperty('click')
        })
    })
})
