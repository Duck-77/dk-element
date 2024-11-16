import { computed, inject, onMounted, onUnmounted, provide, reactive, toRefs } from 'vue'
import {
    formItemContextKey,
    type FormItemContext,
    type FormItemEmits,
    type FormItemProps,
    type ValidateStatusProps,
} from './FormItem'
import { formContextKey, type FormValidateFailure } from './Form'
import { isNil } from 'lodash-es'
import Schema from 'async-validator'

export const useFormItem = (props: FormItemProps, emits?: FormItemEmits) => {
    const formContext = inject(formContextKey, undefined)
    const isForm = computed(() => !!formContext)

    const labelPosition = computed(() => {
        if (isForm) {
            return props.labelPosition || formContext?.labelPosition
        } else {
            return props.labelPosition
        }
    })

    let initialVal: any = null
    const validateStatus = reactive<ValidateStatusProps>({
        state: 'init',
        errorMessage: '',
        loading: false,
    })

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

    const isRequired = computed(() => {
        if (innerRule.value.length === 0) {
            return false
        } else {
            return innerRule.value.some((item) => item.required)
        }
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

    const validate = async (trigger?: string) => {
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
        validateStatus.state = 'init'
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

    //@ts-ignore
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

    return {
        labelPosition,
        validateStatus,
        innerVal,
        innerRule,
        isRequired,
        getTrggeredRules,
        validate,
        clearValidate,
        resetField,
    }
}
