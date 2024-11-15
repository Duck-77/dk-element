<template>
    <div
        class="dk-form-item"
        :class="{
            'is-error': validateStatus.state === 'error',
            'is-success': validateStatus.state === 'success',
            'is-loading': validateStatus.loading,
        }">
        <label class="dk-form-tiem__label">
            <slot
                name="label"
                :label="label">
                {{ label }}
            </slot>
        </label>
        <div class="dk-form-item__content">
            <slot :validate="validate"></slot>
            <div
                class="dk-form-iitem__error-message"
                v-if="validateStatus.state === 'error'">
                {{ validateStatus.errorMessage }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, provide, reactive } from 'vue'
import { formContextKey, type FormValidateFailure } from './Form'
import { isNil } from 'lodash-es'
import Schema from 'async-validator'
import { formItemContextKey, type FormItemProps } from './FormItem'
defineOptions({
    name: 'DkFormItem',
})

const props = defineProps<FormItemProps>()
const formContext = inject(formContextKey)

const innerVal = computed(() => {
    const model = formContext?.model
    if (model && props.prop && !isNil(model[props.prop])) {
        return model[props.prop]
    } else {
        return null
    }
})

const innerRule = computed(() => {
    const rules = formContext?.rules
    if (rules && props.prop && !isNil(rules[props.prop])) {
        return rules[props.prop]
    } else {
        return []
    }
})

const validateStatus = reactive({
    state: 'init',
    errorMessage: '',
    loading: false,
})

const validate = () => {
    if (props.prop) {
        console.log('执行')
        const validator = new Schema({
            [props.prop]: innerRule.value,
        })
        validateStatus.loading = true
        validator
            .validate({ [props.prop]: innerVal.value })
            .then(() => {
                validateStatus.state = 'success'
            })
            .catch((e: FormValidateFailure) => {
                const { errors } = e
                validateStatus.state = 'error'
                validateStatus.errorMessage = errors && errors.length > 0 ? errors[0].message || '' : ''
            })
            .finally(() => {
                validateStatus.loading = false
            })
    }
}

provide(
    formItemContextKey,
    reactive({
        validate,
    })
)
</script>
<style scoped></style>
