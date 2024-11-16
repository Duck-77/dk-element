<template>
    <form
        action=""
        class="dk-form"
        :class="{
            [`dk-form--label-${labelPosition}`]: labelPosition,
        }">
        <slot></slot>
    </form>
</template>
<script setup lang="ts">
import { provide, reactive, toRefs } from 'vue'
import { type FormContext, type FormInstance, type FormProps, type FormValidateFailure, formContextKey } from './Form'
import { type FormItemContext } from './FormItem'
import { type ValidateFieldsError } from 'async-validator'

defineOptions({
    name: 'dk-form',
})
const props = defineProps<FormProps>()

const fields: FormItemContext[] = reactive([])
const addField: FormContext['addField'] = (field) => {
    fields.push(field)
}
const removeField: FormContext['removeField'] = (field) => {
    fields.splice(fields.indexOf(field), 1)
}

const validate: FormInstance['validate'] = async () => {
    let validationErrors: ValidateFieldsError = {}
    for (const field of fields) {
        try {
            await field.validate('')
        } catch (e) {
            const error = e as FormValidateFailure
            validationErrors = {
                ...validationErrors,
                ...error.fields,
            }
        }
    }
    if (Object.keys(validationErrors).length === 0) {
        return true
    } else {
        return Promise.reject(validationErrors)
    }
}

const resetFields = (keys: string[] = []) => {
    const filterFields = keys.length === 0 ? fields : fields.filter((field) => keys.includes(field.prop))
    filterFields.forEach((field) => field.resetField())
}

const clearValidates = (keys: string[] = []) => {
    const filterFields = keys.length === 0 ? fields : fields.filter((field) => keys.includes(field.prop))
    filterFields.forEach((field) => field.clearValidate())
}

provide(
    formContextKey,
    reactive({
        ...toRefs(props),
        addField,
        removeField,
    })
)

defineExpose<FormInstance>({
    validate,
    resetFields,
    clearValidates,
})
</script>
<style scoped></style>
