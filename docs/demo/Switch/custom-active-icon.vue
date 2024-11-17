<template>
    <div class="switch-demo">
        <Switch
            v-model="switchVal1"
            active-action-icon="eye"
            inactive-action-icon="eye-slash"></Switch>
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
