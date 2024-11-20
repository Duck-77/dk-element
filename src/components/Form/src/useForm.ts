import { Emitter } from '@/hooks/useEmitter'
import type { EmitterProps, FormInstance, FormValidateFailure } from './Form'
import { computed, reactive } from 'vue'
import type { FormItemContext, FormItemLabel } from './FormItem'
import type { ValidateFieldsError } from 'async-validator'

const useForm = () => {
    const emitter = new Emitter<EmitterProps>()

    const fields = reactive<FormItemContext[]>([])
    const itemLabels = reactive<FormItemLabel[]>([])

    emitter.on('addField', (field) => {
        fields.push(field)
    })

    emitter.on('removeField', (field) => {
        fields.splice(fields.indexOf(field), 1)
    })

    emitter.on('addItemLabel', (itemlabel) => {
        itemLabels.push(itemlabel)
    })

    emitter.on('removeItemLabel', (itemlabel) => {
        itemLabels.splice(itemLabels.indexOf(itemlabel), 1)
    })

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

    const maxItemLabelWidth = computed(() => {
        const widths = itemLabels.map((label) => label.labelRef.clientWidth)
        return Math.max(...widths)
    })

    return {
        emitter,
        validate,
        resetFields,
        clearValidates,
        maxItemLabelWidth,
    }
}

export default useForm
