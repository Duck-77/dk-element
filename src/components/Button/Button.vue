<template>
    <button
        ref="_ref"
        class="dk-button"
        :class="{
            [`dk-button-${type}`]: type,
            [`dk-button-${size}`]: size,
            'is-plain': plain,
            'is-round': round,
            'is-circle': circle,
            'is-disable': disabled,
        }"
        :disabled="disabled"
        :autofocus="autofocus"
        :type="nativeType">
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'
defineOptions({
    name: 'dk-button',
})
withDefaults(defineProps<ButtonProps>(), {
    nativeType: 'button',
})

const _ref = ref<HTMLButtonElement>()

defineExpose({
    ref: _ref,
})
</script>
<style scoped>
</style>
