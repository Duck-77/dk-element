<template>
    <div style="display: flex; gap: 10px; align-items: center">
        <div class="input-demo">
            <Input
                v-model="iptval1"
                placeholder="Small Input"
                size="small" />
        </div>
        <div class="input-demo">
            <Input
                v-model="iptval2"
                placeholder="Default Input"
                showPassword />
        </div>
        <div class="input-demo">
            <Input
                v-model="iptval3"
                placeholder="Large Input"
                size="large" />
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'

const iptval1 = ref('')
const iptval2 = ref('')
const iptval3 = ref('')
</script>
<style scoped>
.input-demo {
    width: 220px;
}
</style>
