import { type RadioEmits, type RadioProps } from './Radio'
import { computed, inject, ref, useId, type SetupContext } from 'vue'
import { radioGroupContextKey } from './RadioGroup'

export const useRadio = (props: RadioProps, emit?: RadioEmits) => {
    const radioRef = ref<HTMLInputElement>()
    const radioGroup = inject(radioGroupContextKey, undefined)
    const isGroup = computed(() => !!radioGroup)
    const modelValue = computed<RadioProps['modelValue']>({
        get() {
            return isGroup.value ? radioGroup!.modelValue : props.modelValue
        },
        set(val) {
            if (isGroup.value) {
                radioGroup!.changeEvent(val)
            } else {
                emit && emit('update:modelValue', val)
            }
            radioRef.value!.checked = modelValue.value === props.value
        },
    })
    const focus = ref(false)
    const disabled = computed(() => radioGroup?.disabled || props.disabled)
    const name = computed(() => {
        if (isGroup) {
            return radioGroup?.name || props.name
        } else {
            return props.name || useId()
        }
    })
    const checked = computed(() => modelValue.value === props.value)
    const border = computed(() => radioGroup?.border || props.border)
    const size = computed(() => radioGroup?.size || props.size)

    return {
        radioRef,
        modelValue,
        disabled,
        name,
        checked,
        focus,
        border,
        size,
    }
}
