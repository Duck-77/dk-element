import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from '../../src/components/Input/Input.vue'

describe('test::dk-input', () => {
    it('1.测试 动态绑定', () => {
        let wrapper = mount(Input, {
            props: {
                size: 'large',
                type: 'text',
                disabled: true,
                modelValue: '',
            },
            slots: {
                prepend: 'prepend',
                append: 'append',
                prefix: 'prefix',
                suffix: 'suffix',
            },
        })
        // class
        expect(wrapper.classes()).toContain('dk-input--large')
        expect(wrapper.classes()).toContain('dk-input--text')
        expect(wrapper.classes()).toContain('is-disabled')
        expect(wrapper.classes()).toContain('is-prepend')
        expect(wrapper.classes()).toContain('is-append')
        expect(wrapper.classes()).toContain('is-prefix')
        expect(wrapper.classes()).toContain('is-suffix')
        // input
        expect(wrapper.find('input').exists()).toBeTruthy()
        expect(wrapper.get('input').attributes('type')).toBe('text')
        // slots
        expect(wrapper.find('.dk-input__prefix').exists()).toBeTruthy()
        expect(wrapper.get('.dk-input__prefix').text()).toBe('prefix')
        expect(wrapper.find('.dk-input__suffix').exists()).toBeTruthy()
        expect(wrapper.get('.dk-input__suffix').text()).toBe('suffix')
        expect(wrapper.find('.dk-input__prepend').exists()).toBeTruthy()
        expect(wrapper.get('.dk-input__prepend').text()).toBe('prepend')
        expect(wrapper.find('.dk-input__append').exists()).toBeTruthy()
        expect(wrapper.get('.dk-input__append').text()).toBe('append')
        // textarea
        wrapper = mount(Input, {
            props: {
                type: 'textarea',
                modelValue: '',
            },
        })
        expect(wrapper.find('textarea').exists()).toBeTruthy()
    })

    it('2.测试 v-model', async () => {
        const wrapper = mount(Input, {
            props: {
                modelValue: 'test',
                'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e }),
            },
        })

        const input = wrapper.get('input')
        expect(input.element.value).toBe('test')

        await input.setValue('update')
        expect(wrapper.props('modelValue')).toBe('update')
        expect(input.element.value).toBe('update')

        await wrapper.setProps({ modelValue: 'async update' })
        expect(input.element.value).toBe('async update')
    })

    it('3.测试 点击清空', async () => {
        const wrapper = mount(Input, {
            props: {
                type: 'text',
                clearable: true,
                modelValue: 'test',
                'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e }),
            },
            global: {
                stubs: ['Icon'],
            },
        })

        expect(wrapper.find('input').exists()).toBeTruthy()
        const input = wrapper.get('input')
        await input.trigger('focus')
        expect(wrapper.find('.dk-input__clear').exists()).toBeTruthy()

        await wrapper.find('.dk-input__clear').trigger('click')
        expect(input.element.value).toBe('')
    })

    it.only('4.测试 密码显示切换', async () => {
        const wrapper = mount(Input, {
            props: {
                modelValue: '',
                'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e }),
                type: 'password',
                showPassword: true,
            },
            global: {
                stubs: ['Icon'],
            },
        })
        const input = wrapper.get('input')
        expect(input.element.type).toBe('password')
        expect(wrapper.props('showPassword')).toBeTruthy()
        // 空值不显示
        expect(wrapper.find('.dk-input__password-toogle').exists()).toBeFalsy()
        // 非空显示
        await input.setValue('123456')
        expect(wrapper.find('.dk-input__password-toogle').exists()).toBeTruthy()
        // 切换
        expect(wrapper.get('.dk-input__password-toogle').attributes('icon')).toBe('fa-regular fa-eye-slash')
        const passwordToogle = wrapper.find('.dk-input__password-toogle')
        await passwordToogle.trigger('click')
        expect(wrapper.get('.dk-input__password-toogle').attributes('icon')).toBe('fa-regular fa-eye')
    })
})
