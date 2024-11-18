<template>
    <div
        class="dk-switch"
        :class="{
            [`dk-switch--${size}`]: size,
            'is-disabled': disabled,
            'is-loading': loading,
            'is-checked': checked,
        }"
        :style="style">
        <input
            ref="inputRef"
            class="dk-switch__input"
            type="radio"
            role="switch"
            :name="name"
            v-model="switchValue"
            :disabled="notAllowed"
            @keydown.enter="handleSwitchToogle" />
        <div
            class="dk-switch__core"
            @click.prevent="handleSwitchToogle">
            <div class="dk-switch__core-action">
                <Icon
                    class="dk-switch__core-action-loading"
                    size="xs"
                    icon="spinner"
                    spin
                    v-if="loading"></Icon>
                <Icon
                    class="dk-switch__core-action-icon"
                    size="xs"
                    :icon="activeActionIcon"
                    v-else-if="activeActionIcon && switchValue"></Icon>
                <Icon
                    class="dk-switch__core-action-icon"
                    size="xs"
                    :icon="inactiveActionIcon"
                    v-else-if="inactiveActionIcon && !switchValue"></Icon>
                <Icon
                    class="dk-switch__core-action-icon"
                    size="xs"
                    :icon="icon"
                    v-else-if="icon"></Icon>
            </div>
            <div class="dk-switch__core-inner">
                <span
                    v-if="activeText && inactiveText"
                    class="dk-switch__core-inner-text">
                    {{ checked ? activeText : inactiveText }}
                </span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import type { SwtichProps, SwitchEmits, SwitchValue } from './types'
import Icon from '../Icon/Icon.vue'

defineOptions({
    name: 'DkSwitch',
    inheritAttrs: false,
})

const props = withDefaults(defineProps<SwtichProps>(), {
    activeValue: true,
    inactiveValue: false,
})
const emits = defineEmits<SwitchEmits>()

const inputRef = ref<HTMLInputElement>()

const handleSwitchToogle = () => {
    const handleEmits = (toogle: boolean = true) => {
        let newValue: SwitchValue
        if (toogle) {
            newValue = checked.value ? props.inactiveValue : props.activeValue
        } else {
            newValue = props.inactiveValue
        }
        emits('change', newValue)
        emits('update:modelValue', newValue)
    }

    if (notAllowed.value) return
    if (props.beforeChange) {
        props
            .beforeChange()
            .then((res) => {
                if (!res) {
                    handleEmits(false)
                    console.warn('Switch toogle failed witch reason: reject false')
                } else {
                    handleEmits()
                }
            })
            .catch((e) => {
                handleEmits(false)
                console.warn('Switch toogle failed witch reason:' + e)
            })
    } else {
        handleEmits()
    }
}

const switchValue = computed({
    get() {
        return props.modelValue
    },
    set() {
        handleSwitchToogle()
    },
})

const checked = computed(() => switchValue.value === props.activeValue)

const notAllowed = computed(() => props.disabled || props.loading)

onMounted(() => {
    inputRef.value!.checked = checked.value
    nextTick(() => {
        if (props.inactiveValue && props.activeValue) {
            emits('update:modelValue', props.inactiveValue)
        }
    })
})
</script>
<style scoped></style>
