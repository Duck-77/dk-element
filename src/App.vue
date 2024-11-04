<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types'

const buttonRef = ref<ButtonInstance>()

onMounted(() => {
    console.log('buttonRef', buttonRef.value?.ref)
})
</script>

<template>
    <main>
        <Button>Test Button</Button>
        <Button plain>Plain Button</Button>
        <Button round>Round Button</Button>
        <br>
        <Button type="primary">Test Button</Button>
        <Button type="success">Test Button</Button>
        <Button type="warning">Test Button</Button>
        <Button type="danger">Test Button</Button>
        <Button type="info">Test Button</Button>
        <br>
        <Button :disabled="true">disabled</Button>
        <Button type="primary" disabled>Test Button</Button>
        <Button type="success" disabled>Test Button</Button>
        <Button type="warning" disabled>Test Button</Button>
        <Button type="danger" disabled>Test Button</Button>
        <Button type="info" disabled>Test Button</Button>
        <br>
        <Button size="large">Large Button</Button>
        <Button size="small">Small Button</Button>
    </main>
</template>

<style scoped></style>
