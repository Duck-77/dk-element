<template>
    <label
        class="dk-radio"
        :class="{
            [`dk-radio--${size}`]: size,
            'is-checked': '',
        }">
        <span class="dk-radio__input" :class="{
            'is-checked':''
        }">
            <input
                class="dk-radio__original"
                type="radio"
                :value="value"
                :name="name"
                :disabled="finalDsiabled" />
            <span class="dk-radio__inner"></span>
        </span>
        <span class="dk-radio__label">{{ label }}</span>
    </label>
</template>
<script setup lang="ts">
import { computed, inject } from 'vue'
import type { RadioEmits, RadioProps } from './Radio'
import { radioGropContextKey } from './RadioGroup'
defineOptions({
    name: 'DkRadio',
})

const props = defineProps<RadioProps>()
const emits = defineEmits<RadioEmits>()

const radioGroupContext = inject(radioGropContextKey)

const name = computed(() => radioGroupContext?.name.value)
const finalDsiabled = computed(() => {
    return radioGroupContext?.disabled.value ? radioGroupContext?.disabled.value : props.disabled
})

const handleChange = () => {
    emits('change', props.moduleValue)
}
</script>
<style scoped></style>
