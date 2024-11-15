<template>
    <div class="dk-form-item">
        <label class="dk-form-tiem__label">
            <slot
                name="label"
                :label="label">
                {{ label }}
            </slot>
        </label>
        <div class="dk-form-item__content">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { type FormItemProps } from './FormItem'

const props = defineProps<FormItemProps>()
</script>
<style scoped></style>
