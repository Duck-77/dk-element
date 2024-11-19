//@ts-nocheck
import { mount, VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import Collapse from '../../src/components/Collapse/Collapse.vue'
import CollapseItem from '../../src/components/Collapse/CollapseItem.vue'

describe('test::dk-collapse', () => {
    let wrapper: VueWrapper
    let handleClick
    //headers
    let headers, headerA, headerB, headerC
    //contents
    let contents, contentA, contentB, contentC

    beforeEach(() => {
        handleClick = vi.fn()
        wrapper = mount(
            () => (
                <Collapse modelValue={['a']}>
                    <CollapseItem name='a' title='title a'>
                        content a
                    </CollapseItem>
                    <CollapseItem name='b' title='title b'>
                        content b
                    </CollapseItem>
                    <CollapseItem name='c' title='title c' disabled>
                        content c
                    </CollapseItem>
                </Collapse>
            ),
            {
                global: {
                    stubs: ['Icon'],
                },
                attachTo: document.body,
            }
        )
        //headers
        headers = wrapper.findAll('.dk-collapse-item__header')

        headerA = headers[0]
        headerB = headers[1]
        headerC = headers[2]
        //contents
        contents = wrapper.findAll('.dk-collapse-item__wrapper')

        contentA = contents[0]
        contentB = contents[1]
        contentC = contents[2]
    })

    test('number of sub components should be 3', () => {
        //数量
        expect(headers.length).toBe(3)
        expect(contents.length).toBe(3)
    })

    test('sub components should have self text content', () => {
        //文本
        expect(headerA.text()).toBe('title a')
        expect(contentA.text()).toBe('content a')
        expect(contentB.text()).toBe('content b')
        expect(contentC.text()).toBe('content c')
    })

    test('sub components A should be visible,but the others should be not', () => {
        //可见
        expect(contentA.isVisible()).toBeTruthy()
        expect(contentB.isVisible()).toBeFalsy()
        expect(contentC.isVisible()).toBeFalsy()
    })

    test('sub compontents should be invisiable by click', async () => {
        //点击隐藏
        await headerA.trigger('click')
        expect(contentA.isVisible()).toBeFalsy()
    })

    test('sub compontents should be visiable by click', async () => {
        //点击显示
        await headerB.trigger('click')
        expect(contentB.isVisible()).toBeTruthy()
    })

    test('sub compontents will not change if disabled ', async () => {
        //disable点击无效
        await headerC.trigger('click')
        expect(contentC.isVisible()).toBeFalsy()
    })

    describe('test emit(change) with two methods', () => {
        test('method1', async () => {
            const handleChange = vi.fn()
            const wrapper = mount(
                () => (
                    <Collapse modelValue={['a']} onChange={handleChange}>
                        <CollapseItem name='a' title='title a'>
                            content a
                        </CollapseItem>
                        <CollapseItem name='b' title='title b'>
                            content b
                        </CollapseItem>
                        <CollapseItem name='c' title='title c' disabled>
                            content c
                        </CollapseItem>
                    </Collapse>
                ),
                {
                    global: {
                        stubs: ['Icon'],
                    },
                    attachTo: document.body,
                }
            )
            const headerA = wrapper.findAll('.dk-collapse-item__header')[0]
            await headerA.trigger('click')
            await headerA.trigger('click')
            expect(handleChange).toHaveBeenCalledWith(['a'])
            expect(handleChange).toHaveBeenCalledWith([])
        })
        test('method2', async () => {
            const wrapper = mount(Collapse, {
                props: {
                    modelValue: ['a'],
                },
                slots: {
                    default: (
                        <>
                            <CollapseItem name='a' title='title a'>
                                content a
                            </CollapseItem>
                            <CollapseItem name='b' title='title b'>
                                content b
                            </CollapseItem>
                            <CollapseItem name='c' title='title c' disabled>
                                content c
                            </CollapseItem>
                        </>
                    ),
                },
                global: {
                    stubs: ['Icon'],
                },
                attachTo: document.body,
            })
            const headerA = wrapper.findAll('.dk-collapse-item__header')[0]
            await headerA.trigger('click')
            await headerA.trigger('click')
            // console.table(wrapper.emitted())
            const onChange = wrapper.emitted('change')
            expect(onChange[0]).toEqual([[]])
            expect(onChange[1]).toEqual([['a']])
        })
    })

    describe('test accordion mode', () => {
        test('when set accordion mode, click one and ohters should close',async () => {
            const wrapper = mount(
                () => (
                    <Collapse modelValue={['a']} accordion>
                        <CollapseItem name='a' title='title a'>
                            content a
                        </CollapseItem>
                        <CollapseItem name='b' title='title b'>
                            content b
                        </CollapseItem>
                        <CollapseItem name='c' title='title c'>
                            content c
                        </CollapseItem>
                    </Collapse>
                ),
                {
                    global: {
                        stubs: ['Icon'],
                    },
                    attachTo: document.body,
                }
            )
            const headers = wrapper.findAll('.dk-collapse-item__header')
            const headerA = headers[0]
            const headerB = headers[1]
            const headerC = headers[2]
            const contents = wrapper.findAll('.dk-collapse-item__wrapper')
            const contentA = contents[0]
            const contentB = contents[1]
            const contentC = contents[2]
            expect(contentA.isVisible()).toBeTruthy()
            expect(contentB.isVisible()).toBeFalsy()
            expect(contentC.isVisible()).toBeFalsy()
            await headerA.trigger('click')
            expect(contentA.isVisible()).toBeFalsy()
            expect(contentB.isVisible()).toBeFalsy()
            expect(contentC.isVisible()).toBeFalsy()
            await headerB.trigger('click')
            expect(contentA.isVisible()).toBeFalsy()
            expect(contentB.isVisible()).toBeTruthy()
            expect(contentC.isVisible()).toBeFalsy()
        })

        test('when set accordion mode and number active > 1, click one and ohters should close bu the one is active',async () => {
            const wrapper = mount(
                () => (
                    <Collapse modelValue={['a','b','c']} accordion>
                        <CollapseItem name='a' title='title a'>
                            content a
                        </CollapseItem>
                        <CollapseItem name='b' title='title b'>
                            content b
                        </CollapseItem>
                        <CollapseItem name='c' title='title c'>
                            content c
                        </CollapseItem>
                    </Collapse>
                ),
                {
                    global: {
                        stubs: ['Icon'],
                    },
                    attachTo: document.body,
                }
            )
            const headers = wrapper.findAll('.dk-collapse-item__header')
            const headerA = headers[0]
            const headerB = headers[1]
            const headerC = headers[2]
            const contents = wrapper.findAll('.dk-collapse-item__wrapper')
            const contentA = contents[0]
            const contentB = contents[1]
            const contentC = contents[2]
            expect(contentA.isVisible()).toBeTruthy()
            expect(contentB.isVisible()).toBeTruthy()
            expect(contentC.isVisible()).toBeTruthy()
            await headerB.trigger('click')
            expect(contentA.isVisible()).toBeFalsy()
            expect(contentB.isVisible()).toBeTruthy()
            expect(contentC.isVisible()).toBeFalsy()
            await headerA.trigger('click')
            expect(contentA.isVisible()).toBeTruthy()
            expect(contentB.isVisible()).toBeFalsy()
            expect(contentC.isVisible()).toBeFalsy()
        })
    })
})
