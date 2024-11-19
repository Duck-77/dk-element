import { describe, expect, it, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { DkMessage as MessageCreator } from '../../src/components/Message/method.ts'
import DkMessage from '../../src/components/Message/Message.vue'
import { nextTick } from 'process'
import { afterEach, beforeEach } from 'node:test'

describe('test::dk-message', () => {
    describe('basic', () => {
        test('1.测试 DkMessage方法', async () => {
            const createMessage = vi.fn(() => {
                MessageCreator({
                    message: 'test',
                    duration: 0,
                })
            })

            createMessage()
            expect(createMessage).toBeCalledTimes(1)
            nextTick(() => {
                const wrapper = document.body.querySelector('.dk-message')
                expect(wrapper).toBeTruthy()
                expect(wrapper?.textContent).toBe('test')
            })
        })
    })

    describe('props', () => {
        describe('1.duration', () => {
            it('a.duration=0', async () => {
                const wrapper = mount(DkMessage, {
                    props: {
                        id: 1,
                        message: 'test',
                        zIndex: 2000,
                        duration: 0,
                        onDestory: () => {},
                    },
                    global: {
                        stubs: ['Icon', 'font-awesome-icon'],
                    },
                })

                await nextTick(() => {})
                vi.useFakeTimers()
                const message = wrapper.find('.dk-message')
                expect(message.exists()).toBeTruthy()
                vi.runAllTimers()
                expect(message.exists()).toBeTruthy()
                expect(message.text()).toBe('test')
            })

            it('b.duration=3000', async () => {
                const wrapper = mount(DkMessage, {
                    props: {
                        id: 1,
                        message: 'test',
                        zIndex: 2000,
                        duration: 3000, //default
                        onDestory: () => {},
                    },
                    global: {
                        stubs: ['Icon', 'font-awesome-icon'],
                    },
                })

                await nextTick(() => {})
                vi.useFakeTimers()
                const message = wrapper.find('.dk-message')
                expect(message.exists()).toBeTruthy()
                vi.advanceTimersByTime(4000)
                expect(message.exists()).toBeTruthy()
                expect(message.text()).toBe('test')
            })
        })

        test('2.show-close + click', async () => {
            const wrapper = mount(DkMessage, {
                props: {
                    id: 1,
                    message: 'test',
                    zIndex: 2000,
                    duration: 0,
                    showClose: true,
                    onDestory: () => {},
                },
                global: {
                    stubs: ['Icon', 'font-awesome-icon'],
                },
            })

            await nextTick(() => {})

            expect(wrapper.exists()).toBeTruthy()
            expect(wrapper.get('.dk-message.is-close')).toBeTruthy()

            const closeButton = wrapper.find('.dk-message__close')
            expect(closeButton.exists()).toBeTruthy()
            expect(closeButton.get('icon-stub').attributes('icon')).toBe('xmark')

            await closeButton.trigger('click')

            expect(wrapper.find('dk-message').exists()).toBeFalsy()
        })

        test('3.type', async () => {
            const wrapper = mount(DkMessage, {
                props: {
                    id: 1,
                    message: 'test',
                    zIndex: 2000,
                    duration: 0,
                    type: 'info',
                    onDestory: () => {},
                },
                global: {
                    stubs: ['Icon', 'font-awesome-icon'],
                },
            })

            await nextTick(() => {})

            expect(wrapper.get('.dk-message--info'))

            const icon = wrapper.find('font-awesome-icon-stub')
            expect(icon.exists()).toBeTruthy()

            expect(icon.attributes('icon')).toBe('circle-info')

            wrapper.setProps({ type: 'success' }).then(() => {
                expect(wrapper.props('type')).toBe('success')
                expect(wrapper.get('font-awesome-icon-stub').attributes('icon')).toBe('circle-check')
            })
        })

        test('4.icon', async () => {
            const wrapper = mount(DkMessage, {
                props: {
                    id: 1,
                    message: 'test',
                    zIndex: 2000,
                    duration: 0,
                    icon: 'hand',
                    onDestory: () => {},
                },
                global: {
                    stubs: ['Icon', 'font-awesome-icon'],
                },
            })

            await nextTick(() => {})

            const icon = wrapper.find('font-awesome-icon-stub')
            expect(icon.exists()).toBeTruthy()

            expect(icon.attributes('icon')).toBe('hand')
        })

        test('5.plain', async () => {
            const wrapper = mount(DkMessage, {
                props: {
                    id: 1,
                    message: 'test',
                    zIndex: 2000,
                    duration: 0,
                    plain: true,
                    onDestory: () => {},
                },
                global: {
                    stubs: ['Icon', 'font-awesome-icon'],
                },
            })

            await nextTick(() => {})
            expect(wrapper.get('.dk-message.is-plain')).toBeTruthy()
        })

        test('6.on-show', async () => {
            const onShow = vi.fn(() => {
                console.log('show')
            })

            const wrapper = mount(DkMessage, {
                props: {
                    id: 1,
                    message: 'test',
                    zIndex: 2000,
                    duration: 0,
                    plain: true,
                    onDestory: () => {},
                    onShow,
                },
                global: {
                    stubs: ['Icon', 'font-awesome-icon'],
                },
            })

            await nextTick(() => {})
            expect(onShow).toBeCalledTimes(1)
        })

        test.skip('7.on-close', async () => {
            const onClose = vi.fn(() => {
                console.log('close')
            })

            const wrapper = mount(DkMessage, {
                props: {
                    id: 1,
                    message: 'test',
                    zIndex: 2000,
                    duration: 1000,
                    plain: true,
                    onDestory: () => {},
                    onClose,
                },
                global: {
                    stubs: ['Icon', 'font-awesome-icon'],
                },
            })

            vi.useFakeTimers()

            await nextTick(() => {})

            vi.advanceTimersByTime(2000)

            await nextTick(() => {})
            expect(onClose).toHaveBeenCalledTimes(1)
        })

        test('8.on-click-close', async () => {
            const onClickClose = vi.fn(() => {
                console.log('show')
            })

            const wrapper = mount(DkMessage, {
                props: {
                    id: 1,
                    message: 'test',
                    zIndex: 2000,
                    duration: 0,
                    plain: true,
                    showClose: true,
                    onDestory: () => {},
                    onClickClose,
                },
                global: {
                    stubs: ['Icon', 'font-awesome-icon'],
                },
            })

            await nextTick(() => {})
            const closeButton = wrapper.get('.dk-message__close')
            await closeButton.trigger('click')

            expect(onClickClose).toHaveBeenCalledTimes(1)
        })
    })
})
