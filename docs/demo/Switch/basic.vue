<template>
    <div class="switch-demo">
        <Switch v-model="switchVal"></Switch>
    </div>
</template>
<script setup>
import Switch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'

const switchVal = ref(false)
</script>
<style scoped></style>
