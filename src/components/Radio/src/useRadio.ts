import { type RadioEmits, type RadioProps } from './Radio'
import { computed, inject, ref, type SetupContext } from 'vue'
import { radioGroupContextKey } from './RadioGroup'

export const useRadio = (props: RadioProps, emit?: RadioEmits) => {
    const radioRef = ref<HTMLInputElement>()
    const radioGroup = inject(radioGroupContextKey, undefined)
    console.log('radioGroup', radioGroup, 'radioGroup?.modelValue', radioGroup?.modelValue)
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
    const disabled = radioGroup?.disabled || props.disabled
    const name = radioGroup?.name || props.name

    return {
        radioRef,
        modelValue,
        disabled,
        name,
    }
}
