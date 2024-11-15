<template>
    <view
        class="dk-radio-group"
        :name="name"
        :id="id">
        <slot></slot>
    </view>
</template>
<script setup lang="ts">
import { computed, nextTick, provide, reactive, ref, toRefs, useId } from 'vue'
import { type RadioGroupProps, type RadioGroupEmits, radioGroupContextKey, type RadioGroupContext } from './RadioGroup'
defineOptions({
    name: 'DkRadioGroup',
})

const props = withDefaults(defineProps<RadioGroupProps>(), {
    size: 'defualt',
})

const emits = defineEmits<RadioGroupEmits>()

const changeEvent: RadioGroupContext['changeEvent'] = (value) => {
    emits('update:modelValue', value)
    nextTick(() => emits('change', value))
}

const { modelValue, disabled } = toRefs(props)

const name = computed(() => props.name || useId())

provide(
    radioGroupContextKey,
    reactive({
        modelValue,
        disabled,
        name,
        changeEvent,
    })
)
</script>
<style scoped></style>
