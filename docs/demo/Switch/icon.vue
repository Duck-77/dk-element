<template>
    <div class="switch-demo">
        <Switch
            v-model="switchVal1"
            icon="fa-regular fa-user"></Switch>
    </div>
</template>
<script setup>
import Switch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'

const switchVal1 = ref(false)
</script>
<style scoped>
.switch-demo {
    display: flex;
    gap: 10px;
}
</style>
