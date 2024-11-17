<template>
    <div class="switch-demo">
        <Switch
            v-model="switchVal1"
            activeText="on"
            inactiveText="off"></Switch>
        <Switch
            v-model="switchVal2"
            activeText="ononononon"
            inactiveText="offoffoffoffoff"
            style="--dk-switch-on-color: #13ce66; --dk-switch-off-color: #ff4949"></Switch>
    </div>
</template>
<script setup>
import Switch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'

const switchVal1 = ref(false)
const switchVal2 = ref(false)
</script>
<style scoped>
.switch-demo {
    display: flex;
    gap: 10px;
}
</style>
