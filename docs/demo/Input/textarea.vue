<template>
    <div class="input-demo">
        <Input v-model="iptval" placeholder="TextArea" type="textarea"/>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'

const iptval = ref('')
</script>
<style scoped>
.input-demo{
    width: 220px;
}
</style>
