<template>
    <button ref="_ref" class="dk-button" :class="{
        [`dk-button--${type}`]: type,
        [`dk-button--${size}`]: size,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disable': disabled,
        'is-loading': loading,
    }" :disabled="disabled || loading" :type="nativeType">
        <Icon icon="spinner" spin v-if="loading" />
        <Icon :icon="icon" v-if="icon" />
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import type { ButtonProps } from './types'
    import Icon from '../Icon/Icon.vue'
    defineOptions({
        name: 'DkButton',
    })

    withDefaults(defineProps<ButtonProps>(), {
        nativeType: 'button',
    })

    const _ref = ref<HTMLButtonElement>()

    defineExpose({
        ref: _ref,
    })
</script>
<style scoped></style>
