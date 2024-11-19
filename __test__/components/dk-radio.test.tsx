//@ts-nocheck
import { ref } from 'vue'
import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Radio from '../../src/components/Radio/src/Radio.vue'

describe('test::dk-radio', () => {
    describe('basic', () => {
        test('1.测试 v-model', async () => {
            const v = ref('')
            const wrapper = mount(
                () => (
                    <>
                        <Radio
                            modelValue={v.value}
                            onUpdate:modelValue={(e) => {
                                v.value = e
                            }}
                            value='A'></Radio>
                        <Radio
                            modelValue={v.value}
                            onUpdate:modelValue={(e) => {
                                v.value = e
                            }}
                            value='B'></Radio>
                        <Radio
                            modelValue={v.value}
                            onUpdate:modelValue={(e) => {
                                v.value = e
                            }}
                            value='C'></Radio>
                    </>
                ),
                {
                    attachTo: document.body,
                }
            )

            const radios = wrapper.findAll('.dk-radio')
            await radios[0].trigger('click')
            expect(v.value).toBe('A')
            await radios[1].trigger('click')
            expect(v.value).toBe('B')
            await radios[2].trigger('click')
            expect(v.value).toBe('C')
        })
    })

    describe('props', () => {
        test('1.label', () => {
            const v = ref()
            const wrapper = mount(
                () => (
                    <>
                        <Radio
                            modelValue={v.value}
                            onUpdate:modelValue={(e) => {
                                v.value = e
                            }}
                            value='A'>
                            labelA
                        </Radio>
                        <Radio
                            modelValue={v.value}
                            onUpdate:modelValue={(e) => {
                                v.value = e
                            }}
                            label='labelB'
                            value='B'></Radio>
                        <Radio
                            modelValue={v.value}
                            onUpdate:modelValue={(e) => {
                                v.value = e
                            }}
                            label='labelC'
                            value='C'>
                            labelD
                        </Radio>
                    </>
                ),
                {
                    attachTo: document.body,
                }
            )
            const radios = wrapper.findAll('.dk-radio__label')
            expect(radios[0].text()).toBe('labelA')
            expect(radios[1].text()).toBe('labelB')
            expect(radios[2].text()).not.toBe('labelC')
            expect(radios[2].text()).toBe('labelD')
        })

        test('2.size', () => {
            const wrapper = mount(() => (
                <>
                    <Radio
                        value='a'
                        size='small'></Radio>
                    <Radio
                        value='b'
                        size='large'></Radio>
                </>
            ))
            const radios = wrapper.findAll('.dk-radio')
            expect(radios[0].classes('dk-radio--small')).toBeTruthy()
            expect(radios[1].classes('dk-radio--large')).toBeTruthy()
        })
        test('3.name', () => {
            const wrapper = mount(() => (
                <>
                    <Radio
                        value='a'
                        name="radio-a"></Radio>
                    <Radio
                        value='b'
                        name='radio-b'></Radio>
                </>
            ))
            const inputs = wrapper.findAll('input')
            expect(inputs[0].element.name).toBe('radio-a')
            expect(inputs[1].element.name).toBe('radio-b')
        })
        test('4.border', () => {
            const wrapper = mount(() => (
                <>
                    <Radio
                        value='a'></Radio>
                    <Radio
                        value='b'
                        border></Radio>
                </>
            ))
            const radios = wrapper.findAll('.dk-radio')
            expect(radios[0].classes('is-border')).toBeFalsy()
            expect(radios[1].classes('is-border')).toBeTruthy()
        })
        test('5.disabled', () => {
            const wrapper = mount(() => (
                <>
                    <Radio
                        value='a'></Radio>
                    <Radio
                        value='b'
                        disabled></Radio>
                </>
            ))
            const radios = wrapper.findAll('.dk-radio')
            expect(radios[0].classes('is-disabled')).toBeFalsy()
            expect(radios[1].classes('is-disabled')).toBeTruthy()
        })
    })
})
