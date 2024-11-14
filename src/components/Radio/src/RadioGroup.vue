<template>
    <view
        class="dk-radio-group"
        :name="name"
        :id="id">
        <slot></slot>
    </view>
</template>
<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { type RadioGroupProps, type RadioGroupEmits, radioGropContextKey } from './RadioGroup'
defineOptions({
    name: 'DkRadioGroup',
})

const props = withDefaults(defineProps<RadioGroupProps>(), {
    size: 'defualt',
    name: 'dk-radio-group-name',
})

provide(radioGropContextKey, {
    disabled: ref(props.disabled),
    name: ref(props.name),
})

const emits = defineEmits<RadioGroupEmits>()
</script>
<style scoped></style>
