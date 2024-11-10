<template>
    <div
        class="dk-input"
        :class="{
            [`dk-input--${type}`]: type,
            [`dk-input--${size}`]: size,
            'is-disabled': disabled,
            'is-prepend': $slots.prepend,
            'is-append': $slots.append,
            'is-prefix': $slots.prefix,
            'is-suffix': $slots.suffix,
            'is-focus': isFocus
        }">
        <!-- input -->
        <template v-if="type !== 'textarea'">
            <!-- slots.prepend -->
            <div class="dk-input__prepend" v-if="$slots.prepend">
                <slot name="prepend"></slot>
            </div>
            <div class="dk-input__wrapper" :class="{'is-focus': isFocus}">
                <!-- slots.prefix -->
                <span class="dk-input__prefix" v-if="$slots.prefix">
                    <slot name="prefix"></slot>
                </span>
                <input
                    ref="inputRef"
                    class="dk-input__inner"
                    :style="inputStyle"
                    v-bind="attrs"
                    v-model="inputValue"
                    :type="showPassword ? (!passwordVisible ? 'password' : 'text') : type"
                    :readonly="readonly"
                    :placeholder="placeholder"
                    :form="form"
                    :autocomplete="autocomplete"
                    :autofocus="autofocus"
                    :disabled="disabled"
                    @focus="($event) => handleFocus($event)"
                    @blur="($event) => handleBlur($event)"
                    @change="handleChange" />
                <!-- slots.suffix -->
                <span class="dk-input__suffix" v-if="$slots.suffix || clearShow || passwordToogleShow">
                    <slot name="suffix"></slot>
                    <Icon
                        class="dk-input__clear"
                        icon="fa-regular fa-circle-xmark"
                        @click="handleClear"
                        v-if="clearShow"></Icon>
                    <Icon
                        class="dk-input__password-toogle"
                        :icon="passwordVisible ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'"
                        @click="passwordVisible = !passwordVisible"
                        v-if="passwordToogleShow"></Icon>
                </span>
            </div>
            <!-- slots.append -->
            <div class="dk-input__append" v-if="$slots.append">
                <slot name="append"></slot>
            </div>
        </template>

        <!-- textarea -->
        <template v-else>
            <textarea
                ref="inputRef"
                class="dk-textarea__wrapper"
                :style="inputStyle"
                v-bind="attrs"
                v-model="inputValue"
                :readonly="readonly"
                :placeholder="placeholder"
                :form="form"
                :autocomplete="autocomplete"
                :autofocus="autofocus"
                :disabled="disabled"></textarea>
        </template>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue'
import type { Ref } from 'vue'
import type { InputProps, InputEmits } from './types'
import Icon from '../Icon/Icon.vue'
defineOptions({
    name: 'DkInput',
    inheritAttrs: false,
})
const props = withDefaults(defineProps<InputProps>(), {
    type: 'text',
    autofocus: false,
    autocomplete: 'off',
})
const emits = defineEmits<InputEmits>()
const attrs = useAttrs()

const inputRef = ref<HTMLInputElement>()

const isFocus = ref(false)
const clearShow = computed(() => isFocus.value && props.clearable && !!props.modelValue)

const passwordVisible = ref(false)
const passwordToogleShow = computed(() => props.showPassword && !props.disabled && !!props.modelValue)

const inputValue = computed({
    get() {
        return props.modelValue
    },
    set(newVal) {
        if (newVal !== props.modelValue) {
            emits('update:modelValue', newVal)
        }
    },
})

const handleChange = () => {
    emits('change', props.modelValue)
}

const handleFocus = (e: FocusEvent) => {
    isFocus.value = true
    emits('focus', e)
}

const handleBlur = (e: FocusEvent) => {
    isFocus.value = false
    emits('blur', e)
}

const handleClear = () => {
    emits('update:modelValue', '')
    emits('input', '')
    emits('change', '')
    emits('clear')
}

defineExpose({
    ref: inputRef,
    blur: () => {
        inputRef.value?.blur()
    },
    clear: () => {
        emits('update:modelValue', '')
    },
    focus: () => {
        inputRef.value?.focus()
    },
    select: () => {
        inputRef.value?.select()
    },
})
</script>
<style scoped></style>
