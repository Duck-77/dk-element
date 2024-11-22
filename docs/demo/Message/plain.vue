<template>
    <div class="message-demo">
        <Button @click="open('success')">Success</Button>
        <Button @click="open('warning')">Warning</Button>
        <Button @click="open('')">Message</Button>
        <Button @click="open('error')">Error</Button>
    </div>
</template>
<script setup>
import { DkMessage } from '@/components/Message/method.ts'
import Button from '@/components/Button/button.vue'

const open = (type) => {
    DkMessage({
        message: `This is a ${type ?? ''} message`,
        type,
        plain: true,
    })
}
</script>
<style scoped>
.message-demo {
    display: flex;
    gap: 10px;
}
</style>
