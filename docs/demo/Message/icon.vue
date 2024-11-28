<template>
    <div class="message-demo">
        <Button @click="open">Show Icon Message</Button>
    </div>
</template>
<script setup>
import { createDkMessage } from '@/components/Message/method.ts'
import Button from '@/components/Button/button.vue'

const open = () => {
    createDkMessage({ message: 'This is a message.', icon: 'paper-plane' })
}
</script>
<style scoped>
.message-demo {
    display: flex;
    gap: 10px;
}
</style>
