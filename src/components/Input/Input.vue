<template>
    <div class="dk-input" :class="{
        [`dk-input--${type}`]: type,
        [`dk-input--${size}`]: size,
        'is-disabled': disabled,
        'is-prepend': $slots.prepend,
        'is-append': $slots.append,
        'is-prefix': $slots.prefix,
        'is-suffix': $slots.suffix,
    }">

        <!-- input -->
        <template v-if="type !== 'textarea'">
            <!-- slots.prepend -->
            <div class="dk-input__prepend" v-if="$slots.prepend">
                <slot name="prepend"></slot>
            </div>
            <div class="dk-input__wrapper">
                <!-- slots.prefix -->
                <span class="dk-input__prefix" v-if="$slots.prefix">
                    <slot name="prefix"></slot>
                </span>
                <input class="dk-input__inner" v-model="inputValue"
                    :type="showPassword ? (!passwordVisible ? 'password' : 'text') : type" :placeholder="placeholder"
                    :disabled="disabled" @focus="isFocus = true" @blur="isFocus = false">
                <!-- slots.suffix -->
                <span class="dk-input__suffix" v-if="$slots.suffix || clearShow || passwordToogleShow">
                    <slot name="suffix"></slot>
                    <Icon class="dk-input__clear" icon="fa-regular fa-circle-xmark" @click="handleClear"
                        v-if="clearShow"></Icon>
                    <Icon class="dk-input__password-toogle"
                        :icon="passwordVisible ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'"
                        @click="passwordVisible = !passwordVisible" v-if="passwordToogleShow"></Icon>
                </span>
            </div>
            <!-- slots.append -->
            <div class="dk-input__append" v-if="$slots.append">
                <slot name="append"></slot>
            </div>
        </template>

        <!-- textarea -->
        <template v-else>
            <textarea class="dk-textareaw__wrapper" v-model="inputValue" :placeholder="placeholder"
                :disabled="disabled"></textarea>
        </template>
    </div>
</template>
<script setup lang="ts">
    import { computed, ref, watchEffect } from 'vue';
    import type { InputProps, InputEmits } from './types';
    import Icon from '../Icon/Icon.vue';

    defineOptions({
        name: 'DkInput'
    })
    const props = withDefaults(defineProps<InputProps>(), {
        type: 'text'
    })
    const emits = defineEmits<InputEmits>()

    const isFocus = ref(false)
    const clearShow = computed(() => isFocus.value && props.clearable && !!props.modelValue)

    const passwordVisible = ref(false)
    const passwordToogleShow = computed(() => props.showPassword && !props.disabled && !!props.modelValue)

    watchEffect(() => {
        console.log(passwordToogleShow.value)
    })
    const inputValue = computed({
        get() {
            return props.modelValue
        },
        set(newVal) {
            if (newVal !== props.modelValue) {
                emits('update:modelValue', newVal)
            }
        }
    })

    const handleClear = () => {
        emits('update:modelValue', '')
        emits('clear')
    }


</script>
<style scoped></style>