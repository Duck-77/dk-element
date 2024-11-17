<template>
    <div class="switch-demo">
        <Switch
            v-model="switchVal1"
            disabled></Switch>
        <Switch
            v-model="switchVal2"
            disabled></Switch>
    </div>
</template>
<script setup>
import Switch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'

const switchVal1 = ref(false)
const switchVal2 = ref(true)
</script>
<style scoped>
.switch-demo {
    display: flex;
    gap: 10px;
}
</style>
