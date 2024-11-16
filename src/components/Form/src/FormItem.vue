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
import { computed, inject, onMounted, onUnmounted, provide, reactive, toRefs } from 'vue'
import { formContextKey, type FormValidateFailure } from './Form'
import { isNil } from 'lodash-es'
import Schema from 'async-validator'
import { formItemContextKey, type FormItemContext, type FormItemProps } from './FormItem'
defineOptions({
    name: 'DkFormItem',
})

const props = withDefaults(defineProps<FormItemProps>(), {
    prop: '',
})
const formContext = inject(formContextKey)

const innerVal = computed(() => {
    const model = formContext?.model
    if (model && props.prop && !isNil(model[props.prop])) {
        return model[props.prop]
    } else {
        return null
    }
})

let initialVal: any = null

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

const getTrggeredRules = (trigger?: string) => {
    const rules = innerRule.value
    if (rules.length) {
        return rules.filter((rule) => {
            if (!rule.trigger || !trigger) return true
            return trigger && rule.trigger === trigger
        })
    } else {
        return []
    }
}

const validate = (trigger?: string) => {
    const triggerRules = getTrggeredRules(trigger)
    if (triggerRules.length === 0) {
        return true
    }
    if (props.prop) {
        const validator = new Schema({
            [props.prop]: triggerRules,
        })
        validateStatus.loading = true
        return validator
            .validate({ [props.prop]: innerVal.value })
            .then(() => {
                validateStatus.state = 'success'
            })
            .catch((e: FormValidateFailure) => {
                const { errors } = e
                validateStatus.state = 'error'
                validateStatus.errorMessage = errors && errors.length > 0 ? errors[0].message || '' : ''
                return Promise.reject(e)
            })
            .finally(() => {
                validateStatus.loading = false
            })
    }
}

const clearValidate = () => {
    validateStatus.state = ''
    validateStatus.errorMessage = ''
    validateStatus.loading = false
}

const resetField = () => {
    clearValidate()
    const model = formContext?.model
    if (model && props.prop && !isNil(model[props.prop])) {
        model[props.prop] = initialVal
    }
}

const { prop } = toRefs(props)

const formItemContext: FormItemContext = reactive({
    prop,
    validate,
    clearValidate,
    resetField,
})

provide(formItemContextKey, formItemContext)

onMounted(() => {
    if (props.prop) {
        formContext?.addField(formItemContext)
        initialVal = innerVal.value
    }
})

onUnmounted(() => {
    if (props.prop) {
        formContext?.removeField(formItemContext)
    }
})
</script>
<style scoped></style>
