<template>
    <div
        ref="formItem"
        class="dk-form-item"
        :class="{
            [`dk-form-item--label-${labelPosition}`]: labelPosition,
            'is-error': validateStatus.state === 'error',
            'is-success': validateStatus.state === 'success',
            'is-loading': validateStatus.loading,
            'is-required': isRequired,
        }"
        :style="{
            '--dk-form-item-label-width': `${maxItemLabelWidth}px`,
        }">
        <div class="dk-form-item__label-wrapper">
            <label
                ref="formItemLabel"
                class="dk-form-item__label"
                :class="{
                    [`dk-form-item--label-${labelPosition}`]: labelPosition,
                    'is-required': isRequired,
                }"
                :style="{
                    width: `${labelWidth}px`,
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
                    v-if="showMessage && validateStatus.state === 'error'">
                    <span>
                        {{ validateStatus.errorMessage }}
                    </span>
                </div>
            </Transition>
        </div>
    </div>
</template>
<script setup lang="ts">
defineOptions({
    name: 'DkFormItem',
})
import { type FormItemInstance, type FormItemProps, type ValidateStatusProps } from './FormItem'
import { useFormItem } from './useFormItem'

const props = withDefaults(defineProps<FormItemProps>(), {
    prop: '',
    showMessage: true,
})

const {
    formItem,
    formItemLabel,
    labelPosition,
    showMessage,
    labelWidth,
    maxItemLabelWidth,
    validateStatus,
    isRequired,
    validate,
    clearValidate,
    resetField,
} = useFormItem(props)

defineExpose<FormItemInstance>({
    validateStatus,
    validate,
    clearValidate,
    resetField,
})
</script>
.value
<style scoped></style>
