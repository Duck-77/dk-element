import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Alert from '../../src/components/Alert/Alert.vue'

describe('test::dk-alert', () => {
    describe('basic', () => {
        test('mount', () => {
            const wrapper = mount(Alert, {
                props: {
                    type: 'success',
                },
                global: {
                    stubs: ['Icon'],
                },
            })

            const alert = wrapper.find('.dk-alert')
            expect(alert.exists()).toBeTruthy()
        })
    })

    describe('prop', () => {
        test('1.type', async () => {
            const wrapper = mount(Alert, {
                props: {
                    type: 'success',
                },
                global: {
                    stubs: ['Icon'],
                },
            })

            expect(wrapper.get('.dk-alert.dk-alert--success')).toBeTruthy()
            await wrapper.setProps({
                type: 'warning',
            })
            expect(wrapper.get('.dk-alert.dk-alert--warning')).toBeTruthy()
            await wrapper.setProps({
                type: 'error',
            })
            expect(wrapper.get('.dk-alert.dk-alert--error')).toBeTruthy()
            await wrapper.setProps({
                type: 'info',
            })
            expect(wrapper.get('.dk-alert.dk-alert--info')).toBeTruthy()
        })
        test('2.effect', async () => {
            const wrapper = mount(Alert, {
                props: {
                    effect: 'light',
                    type: 'success',
                },
                global: {
                    stubs: ['Icon'],
                },
            })
            expect(wrapper.get('.dk-alert.dk-alert--light')).toBeTruthy()
            await wrapper.setProps({
                effect: 'dark',
            })
            expect(wrapper.get('.dk-alert.dk-alert--dark')).toBeTruthy()
        })
        test('3.title', () => {
            const wrapper = mount(Alert, {
                props: {
                    title: 'success alert',
                    type: 'success',
                },
                global: {
                    stubs: ['Icon'],
                },
            })

            expect(wrapper.get('.dk-alert__title')).toBeTruthy()
            expect(wrapper.get('.dk-alert__title').text()).toBe('success alert')
        })
        test('4.title-center', () => {
            const wrapper = mount(Alert, {
                props: {
                    title: 'success alert',
                    titleCenter: true,
                    type: 'success',
                },
                global: {
                    stubs: ['Icon'],
                },
            })

            expect(wrapper.get('.dk-alert__title')).toBeTruthy()
            expect(wrapper.get('.dk-alert__title').text()).toBe('success alert')
            expect(wrapper.get('.dk-alert__title.is-center')).toBeTruthy()
        })
        test('5.content', () => {
            const wrapper = mount(Alert, {
                props: {
                    content: 'success content',
                    type: 'success',
                },
                global: {
                    stubs: ['Icon'],
                },
            })

            expect(wrapper.get('.dk-alert__content')).toBeTruthy()
            expect(wrapper.get('.dk-alert__content').text()).toBe('success content')
        })
        test('6.content-center', () => {
            const wrapper = mount(Alert, {
                props: {
                    content: 'success content',
                    contentCenter: true,
                    type: 'success',
                },
                global: {
                    stubs: ['Icon'],
                },
            })

            expect(wrapper.get('.dk-alert__content')).toBeTruthy()
            expect(wrapper.get('.dk-alert__content').text()).toBe('success content')
            expect(wrapper.get('.dk-alert__content.is-center')).toBeTruthy()
        })
        test('7.closeable', () => {
            const wrapper = mount(Alert, {
                props: {
                    closeable: true,
                    content: 'success content',
                    type: 'success',
                },
                global: {
                    stubs: ['Icon'],
                },
            })

            const closeButton = wrapper.get('.dk-alert__close-btn')
            expect(closeButton).toBeTruthy()
            expect(closeButton.attributes('icon')).toBe('xmark')
        })

        test('8.show-icon', async () => {
            const wrapper = mount(Alert, {
                props: {
                    closeable: true,
                    content: 'success content',
                    type: 'success',
                },
                global: {
                    stubs: ['Icon'],
                },
            })

            //content no title
            let closeButton = wrapper.get('.dk-alert__content').get('.dk-alert__close-btn')
            expect(closeButton).toBeTruthy()
            expect(closeButton.attributes('icon')).toBe('xmark')

            //if set title prop, icon will disappear under content box
            await wrapper.setProps({
                title: 'success title',
            })

            //title
            expect(wrapper.find('.dk-alert__content .dk-alert__close-btn').exists()).toBeFalsy()
            closeButton = wrapper.get('.dk-alert__title').get('.dk-alert__close-btn')
            expect(closeButton.attributes('icon')).toBe('xmark')
        })
        test('9.close-icon', () => {
            const wrapper = mount(Alert, {
                props: {
                    closeable: true,
                    closeIcon: 'hand',
                    content: 'success content',
                    type: 'success',
                },
                global: {
                    stubs: ['Icon'],
                },
            })

            expect(wrapper.find('.dk-alert__close-btn').exists()).toBeTruthy()
            expect(wrapper.find('.dk-alert__close-btn').attributes('icon')).toBe('hand')
        })
    })

    describe('emits', () => {
        test('1.close', async () => {
            const wrapper = mount(Alert, {
                props: {
                    closeable: true,
                    content: 'success content',
                    type: 'success',
                },
                global: {
                    stubs: ['Icon'],
                },
            })

            const close = wrapper.find('.dk-alert__close-btn')
            expect(close.exists()).toBeTruthy()
            
            await close.trigger('click')
            console.log(wrapper.emitted())
            expect(wrapper.emitted()).toHaveProperty('close')

        })
    })
})
