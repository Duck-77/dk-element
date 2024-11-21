<template>
    <div class="dk-collapse">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
defineOptions({
    name: 'DkCollapse',
})
import { ref, provide, watch } from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from './types'
import { collapseContextKey } from './types'

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue)

watch(
    () => props.modelValue,
    (updated) => {
        activeNames.value = updated
    }
)

if (props.accordion && activeNames.value.length > 1) {
    console.warn('accordion mode should only have one active collapse-item')
}
const handleItemClick = (item: NameType) => {
    const index = activeNames.value.indexOf(item)
    if (props.accordion) {
        activeNames.value = activeNames.value[0] === item ? [] : [item]
    } else {
        if (index > -1) {
            activeNames.value.splice(index, 1)
        } else {
            activeNames.value.push(item)
        }
    }
    emits('update:modelValue', [...activeNames.value])
    emits('change', [...activeNames.value])
}
provide(collapseContextKey, { activeNames, handleItemClick })
</script>
<style scoped></style>
