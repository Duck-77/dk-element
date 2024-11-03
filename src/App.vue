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
        <Button ref="buttonRef">Test Button</Button>

        <h1>Hello World</h1>
        <h2>Hello World</h2>
        <h3>Hello World</h3>
        <a href="#">The link</a>
        <hr />
    </main>
</template>

<style scoped></style>
