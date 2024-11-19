import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Select from '@/components//Select/Select.vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import { Transition } from 'vue'
import { nextTick } from 'node:process'

describe.skip('test::dl-switch', () => {
    describe.skip('basic', () => {
        test('1.options', async () => {
            const selectOptions = [
                { label: 'option1', value: '1' },
                { label: 'option2', value: '2' },
                { label: 'option3', value: '3' },
                { label: 'option4', value: '4' },
            ]

            const wrapper = mount(Select, {
                props: {
                    options: selectOptions,
                    modelValue: '',
                },
                global: {
                    stubs: {
                        Icon: true,
                        Tooltip: Tooltip,
                    },
                },
                attachTo: document.body,
            })
        })
    })

    describe.skip('props', () => {
        test('1.modelValue', () => {})
        test('2.placeholder', () => {})
        test('3.clearable', () => {})
        test('4.dsiabled', () => {})
        test('5.customLabel', () => {})
        test('6.filterable + filterMethod', () => {})
        test('7.remote + remoteMethod', () => {})
    })

    describe.skip('emits', () => {
        test('1.change', () => {})
        test('2.clear', () => {})
        test('3.visible-change', () => {})
    })
})
