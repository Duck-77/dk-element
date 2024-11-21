<template>
    <form
        action=""
        class="dk-form"
        :class="{
            [`dk-form--label-${labelPosition}`]: labelPosition,
            [`dk-form--hide-required-asterisk`]: hideRequiredAsterisk,
            [`dk-form--require-asterisk-${requireAsteriskPosition}`]: requireAsteriskPosition,
        }">
        <slot></slot>
    </form>
</template>
<script setup lang="ts">
defineOptions({
    name: 'dkForm',
})
import { provide, reactive, toRefs } from 'vue'
import { type FormInstance, type FormProps, formContextKey } from './Form'
import useForm from './useForm'

const props = withDefaults(defineProps<FormProps>(), {
    hideRequiredAsterisk: false,
    requireAsteriskPosition: 'left',
    showMessage: true,
})

const { emitter, maxItemLabelWidth, validate, resetFields, clearValidates } = useForm()

provide(
    formContextKey,
    reactive({
        ...toRefs(props),
        emitter,
        maxItemLabelWidth,
    })
)

defineExpose<FormInstance>({
    validate,
    resetFields,
    clearValidates,
})
</script>
<style scoped></style>
