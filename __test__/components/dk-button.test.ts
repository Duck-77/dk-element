import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../../src/components/Button/button.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

describe('test::dk-button', () => {
    describe('props',()=>{
        describe('type', () => {
            test('primary', () => {
                const wrapper = mount(Button, {
                    props: {
                        type: 'primary',
                    },
                })
                expect(wrapper.classes()).toContain('dk-button--primary')
            })
            test('success', () => {
                const wrapper = mount(Button, {
                    props: {
                        type: 'success',
                    },
                })
                expect(wrapper.classes()).toContain('dk-button--success')
            })
            test('warning', () => {
                const wrapper = mount(Button, {
                    props: {
                        type: 'warning',
                    },
                })
                expect(wrapper.classes()).toContain('dk-button--warning')
            })
            test('info', () => {
                const wrapper = mount(Button, {
                    props: {
                        type: 'info',
                    },
                })
                expect(wrapper.classes()).toContain('dk-button--info')
            })
            test('denger', () => {
                const wrapper = mount(Button, {
                    props: {
                        type: 'danger',
                    },
                })
                expect(wrapper.classes()).toContain('dk-button--denger')
            })
        })
    
        describe('icon', () => {
            test('button s icon should be user icon', () => {
                const wrapper = mount(Button, {
                    props: {
                        icon: 'user',
                    },
                    slots: {
                        default: 'icon button',
                    },
                    global: {
                        stubs: ['FontAwesomeIcon'],
                    },
                })
    
                const fasIcon = wrapper.findComponent(FontAwesomeIcon)
                expect(fasIcon.exists()).toBeTruthy()
                expect(fasIcon.attributes('icon')).toBe('user')
            })
        })
    
        describe('loading', () => {
            test('button should dont click and icon is spinner', () => {
                const wrapper = mount(Button, {
                    props: {
                        loading: true,
                    },
                    slots: {
                        default: 'loading button',
                    },
                    global: {
                        stubs: ['FontAwesomeIcon'],
                    },
                })
                expect(wrapper.attributes('disabled')).toBeDefined()
                const fasIcon = wrapper.findComponent(FontAwesomeIcon)
                expect(fasIcon.exists()).toBeTruthy()
                expect(fasIcon.attributes('icon')).toBe('spinner')
            })
        })
    
        describe('disabled', () => {
            test('button should be disabled', () => {
                const wrapper = mount(Button, {
                    props: {
                        type: 'warning',
                        disabled: true,
                    },
                    slots: {
                        default: 'attributes button',
                    },
                })
                expect(wrapper.attributes('disabled')).toBeDefined()
            })
        })
    })
    

    describe('emits', () => {
        test('button should be clickable', () => {
            const wrapper = mount(Button, {
                props: {
                    type: 'warning',
                },
                slots: {
                    default: 'button to click',
                },
            })

            wrapper.get('button').trigger('click')
            expect(wrapper.emitted()).toHaveProperty('click')
        })

        test('button didnt click if be disabled', () => {
            const wrapper = mount(Button, {
                props: {
                    type: 'warning',
                    disabled: true,
                },
                slots: {
                    default: 'disabled button',
                },
            })
            expect(wrapper.attributes('disabled')).toBeDefined()
            wrapper.get('button').trigger('click')
            expect(wrapper.emitted()).not.toHaveProperty('click')
        })
    })
})
