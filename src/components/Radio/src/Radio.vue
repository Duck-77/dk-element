<template>
    <label
        class="dk-radio"
        :class="{
            [`dk-radio--${size}`]: size,
            'is-checked': isChecked,
        }">
        <span
            class="dk-radio__input"
            :class="{
                'is-checked': isChecked,
            }">
            <input
                ref="radioRef"
                v-model="modelValue"
                :value="value"
                class="dk-radio__original"
                type="radio"
                :name="name"
                @change="handleChange"
                :disabled="disabled" />
            <span class="dk-radio__inner"></span>
        </span>
        <span class="dk-radio__label">{{ label }}</span>
    </label>
</template>
<script setup lang="ts">
import { computed, nextTick, reactive, ref } from 'vue'
import type { RadioEmits, RadioProps } from './Radio'
import { useRadio } from './useRadio'

defineOptions({
    name: 'DkRadio',
})

const props = defineProps<RadioProps>()
const emits = defineEmits<RadioEmits>()
const { modelValue, radioRef, disabled, name } = useRadio(props, emits)

const isChecked = computed(() => {
    return modelValue.value == props.value
})

const handleChange = () => {
    nextTick(() => emits('change', modelValue.value))
}
</script>
<style scoped></style>
