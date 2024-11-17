import { computed, inject, nextTick, onMounted, onUnmounted, provide, reactive, ref, toRefs, type Ref } from 'vue'
import {
    formItemContextKey,
    type FormItemContext,
    type FormItemEmits,
    type FormItemProps,
    type ValidateStatusProps,
} from './FormItem'
import { formContextKey, type FormRules, type FormValidateFailure } from './Form'
import { isNil, merge } from 'lodash-es'
import Schema from 'async-validator'

export const useFormItem = (props: FormItemProps, emits?: FormItemEmits) => {
    const formItem = ref<HTMLDivElement>()
    const formItemLabel = ref<HTMLLabelElement>()

    const formContext = inject(formContextKey, undefined)
    const isForm = computed(() => !!formContext)

    const { prop } = toRefs(props)
    const itemLabel = reactive({
        prop,
        labelRef: formItemLabel,
    })

    const emitter = formContext?.emitter
    const labelPosition = computed(() => {
        if (isForm) {
            return props.labelPosition || formContext?.labelPosition
        }
        return props.labelPosition
    })
    const showMessage = computed(() => {
        if (isForm && !formContext?.showMessage) {
            return false
        }
        return props.showMessage
    })
    const labelWidth = computed(() => {
        if (isForm) {
            return props.labelWidth || formContext?.labelWidth
        }
        return props.labelWidth
    })

    const maxItemLabelWidth = computed(() => formContext?.maxItemLabelWidth)

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
        }
        return null
    })

    const innerRule = computed(() => {
        let rules: FormRules = {}
        if (formContext?.rules) {
            rules = merge(formContext?.rules, {
                [props.prop!]: props.rules,
            })
        }
        if (props.prop && props.required && Object.keys(rules).includes(props.prop)) {
            rules[props.prop][0]['required'] = true
        }
        if (props.prop && !isNil(rules[props.prop])) {
            return rules[props.prop]
        } else {
            return []
        }
    })

    const isRequired = computed(() => {
        if (props.required) {
            return true
        }

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
        }
        return []
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

    const formItemContext: FormItemContext = reactive({
        prop: prop as Ref<FormItemContext['prop']>,
        validate,
        clearValidate,
        resetField,
    })

    provide(formItemContextKey, formItemContext)

    onMounted(() => {
        nextTick(() => {
            if (props.prop) {
                if (props.error) {
                    validateStatus.state = 'error'
                    validateStatus.errorMessage = props.error
                }
                emitter!.emit('addField', formItemContext)
                initialVal = innerVal.value
            }
        }).then(() => {
            emitter?.emit('addItemLabel', itemLabel as any)
        })
    })

    onUnmounted(() => {
        if (props.prop) {
            emitter?.emit('removeField', formItemContext)
        }
        emitter?.emit('removeItemLabel', itemLabel as any)
    })

    return {
        formItem,
        formItemLabel,
        labelPosition,
        showMessage,
        labelWidth,
        maxItemLabelWidth,
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
