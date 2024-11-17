<template>
    <div class="switch-demo">
        <Switch
            v-model="switchVal1"
            :beforeChange="handleBeforeChange"
            :loading="switchLoading"></Switch>
    </div>
</template>
<script setup>
import Switch from '@/components/Switch/Switch.vue'
import { DkMessage } from '@/components/Message/method.ts'
import { ref } from 'vue'

const switchLoading = ref(false)
const switchVal1 = ref(false)

const handleBeforeChange = () => {
    switchLoading.value = true
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('timeout')
            DkMessage({ message: 'Switch faild', type: 'error' })
        }, 1000)
    }).finally(() => {
        switchLoading.value = false
    })
}
</script>
<style scoped>
.switch-demo {
    display: flex;
    gap: 10px;
}
</style>
