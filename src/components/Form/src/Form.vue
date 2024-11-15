<template>
    <form
        action=""
        class="dk-form">
        <slot></slot>
    </form>
</template>
<script setup lang="ts">
import { provide, reactive, toRefs } from 'vue'
import { type FormProps, formContextKey } from './Form'
defineOptions({
    name: 'dk-form',
})
const props = defineProps<FormProps>()

provide(
    formContextKey,
    reactive({
        ...toRefs(props),
    })
)
</script>
<style scoped></style>
