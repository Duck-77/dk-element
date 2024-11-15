<template>
    <div class="dk-form-item">
        <label class="dk-form-tiem__label">
            <slot
                name="label"
                :label="label">
                {{ label }}
            </slot>
        </label>
        <div class="dk-form-item__content">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, inject } from 'vue'
import { type FormItemProps } from './FormItem'
import { formContextKey } from './Form'
import { isNil } from 'lodash-es'

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
</script>
<style scoped></style>
