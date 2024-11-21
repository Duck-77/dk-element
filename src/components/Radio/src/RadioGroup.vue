<template>
    <view
        class="dk-radio-group"
        :name="name"
        :id="id">
        <slot></slot>
    </view>
</template>
<script setup lang="ts">
defineOptions({
    name: 'DkRadioGroup',
})
import { computed, nextTick, provide, reactive, ref, toRefs, useId } from 'vue'
import { type RadioGroupProps, type RadioGroupEmits, radioGroupContextKey, type RadioGroupContext } from './RadioGroup'

const props = withDefaults(defineProps<RadioGroupProps>(), {
    size: 'defualt',
})

const emits = defineEmits<RadioGroupEmits>()

const changeEvent: RadioGroupContext['changeEvent'] = (value) => {
    emits('update:modelValue', value)
    nextTick(() => emits('change', value))
}

const { modelValue, disabled, border, size } = toRefs(props)

const name = computed(() => props.name || useId())

provide(
    radioGroupContextKey,
    reactive({
        modelValue,
        border,
        disabled,
        name,
        size,
        changeEvent,
    })
)
</script>
<style scoped></style>
