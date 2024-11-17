<template>
    <div class="switch-demo">
        <Switch
            v-model="switchVal1"
            size="small"></Switch>
        <Switch v-model="switchVal2"></Switch>
        <Switch
            v-model="switchVal3"
            size="large"></Switch>
    </div>
</template>
<script setup>
import Switch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'

const switchVal1 = ref(false)
const switchVal2 = ref(false)
const switchVal3 = ref(false)
</script>
<style scoped>
.switch-demo {
    display: flex;
    gap: 10px;
}
</style>
