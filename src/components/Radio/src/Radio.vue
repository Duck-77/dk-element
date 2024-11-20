<template>
    <label
        class="dk-radio"
        :class="{
            [`dk-radio--${size}`]: size,
            'is-checked': checked,
            'is-focus': focus,
            'is-disabled': disabled,
            'is-border': border,
        }">
        <span
            class="dk-radio__input"
            :class="{
                'is-checked': checked,
                'is-disabled': disabled,
            }">
            <input
                ref="radioRef"
                v-model="modelValue"
                :value="value"
                class="dk-radio__original"
                type="radio"
                :name="name"
                @change="handleChange"
                @focus="focus = true"
                @blur="focus = false"
                :disabled="disabled" />
            <span
                ref="radioInnerRef"
                class="dk-radio__inner"></span>
        </span>
        <span
            class="dk-radio__label"
            @keydown.stop>
            <slot>{{ label }}</slot>
        </span>
    </label>
</template>
<script setup lang="ts">
import { computed, inject, nextTick, ref } from 'vue'
import type { RadioEmits, RadioProps } from './Radio'
import { useRadio } from './useRadio'
import { formItemContextKey } from '@/components/Form/src/FormItem'

defineOptions({
    name: 'DkRadio',
})

const props = defineProps<RadioProps>()
const emits = defineEmits<RadioEmits>()
const formItemContext = inject(formItemContextKey, undefined)
const isFormItem = computed(() => !!formItemContext)

const { modelValue, radioRef, disabled, checked, name, focus, border, size } = useRadio(props, emits)

const radioInnerRef = ref<HTMLSpanElement>()

const handleChange = () => {
    nextTick(() => {
        emits('change', modelValue.value)
        runValidation('change')
    })
}

const runValidation = (trigger?: string) => {
    if (isFormItem.value) {
        formItemContext?.validate(trigger).catch((e) => {
            console.log('validate failed:', e.errors)
        })
    }
}
</script>
<style scoped></style>
