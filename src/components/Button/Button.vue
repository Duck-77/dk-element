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
        <div class="dk-button__content">
            <Icon class="dk-button__icon" icon="spinner" spin v-if="loading" />
            <Icon class="dk-button__icon" :icon="icon" v-if="icon" />
            <slot></slot>
        </div>
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
