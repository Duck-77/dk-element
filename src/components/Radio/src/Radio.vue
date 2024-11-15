<template>
    <label
        class="dk-radio"
        :class="{
            [`dk-radio--${size}`]: size,
            'is-checked': checked,
            'is-focus': focus,
        }">
        <span
            class="dk-radio__input"
            :class="{
                'is-checked': checked,
                'is-focus': focus,
            }">
            <input
                ref="radioRef"
                v-model="modelValue"
                :value="value"
                class="dk-radio__original"
                type="radio"
                :name="name"
                @change="handleChange"
                @keydown="handleFocus"
                @blur="handleBlur"
                :disabled="disabled" />
            <span
                class="dk-radio__inner"
                :class="{
                    'is-checked': checked,
                    'is-focus': focus,
                }"></span>
        </span>
        <span class="dk-radio__label">
            <slot>{{ label }}</slot>
        </span>
    </label>
</template>
<script setup lang="ts">
import { nextTick } from 'vue'
import type { RadioEmits, RadioProps } from './Radio'
import { useRadio } from './useRadio'

defineOptions({
    name: 'DkRadio',
})

const props = defineProps<RadioProps>()
const emits = defineEmits<RadioEmits>()

const { modelValue, radioRef, disabled, checked, name, focus } = useRadio(props, emits)

const handleChange = () => {
    nextTick(() => emits('change', modelValue.value))
}

const handleFocus = (e: KeyboardEvent) => {
    switch (e.key) {
        case 'Tab':
        case 'ArrowUp':
        case 'ArrowRight':
        case 'ArrowDown':
        case 'ArrowLeft':
            focus.value = true
            break
        default:
            break
    }
}

const handleBlur = () => {
    focus.value = false
}
</script>
<style scoped></style>
