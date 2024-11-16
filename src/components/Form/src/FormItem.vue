<template>
    <div
        class="dk-form-item"
        :class="{
            [`dk-form-item--label-${labelPosition}`]: labelPosition,
            'is-error': validateStatus.state === 'error',
            'is-success': validateStatus.state === 'success',
            'is-loading': validateStatus.loading,
            'is-required': isRequired,
        }">
        <div class="dk-form-item__label-wrapper">
            <label
                class="dk-form-item__label"
                :class="{
                    [`dk-form-item--label-${labelPosition}`]: labelPosition,
                    'is-required': isRequired,
                }">
                <slot
                    name="label"
                    :label="label">
                    {{ label }}
                </slot>
            </label>
        </div>
        <div class="dk-form-item__content">
            <slot :validate="validate"></slot>
            <Transition name="dk-form-item__error-message-fade">
                <div
                    class="dk-form-item__error-message"
                    v-if="validateStatus.state === 'error'">
                    <span>
                        {{ validateStatus.errorMessage }}
                    </span>
                </div>
            </Transition>
        </div>
    </div>
</template>
<script setup lang="ts">
import { type FormItemInstance, type FormItemProps, type ValidateStatusProps } from './FormItem'
import { useFormItem } from './useFormItem'
defineOptions({
    name: 'DkFormItem',
})
const props = withDefaults(defineProps<FormItemProps>(), {
    prop: '',
})
const { labelPosition, validateStatus, isRequired, validate, clearValidate, resetField } = useFormItem(props)

defineExpose<FormItemInstance>({
    validateStatus,
    validate,
    clearValidate,
    resetField,
})
</script>
<style scoped></style>
