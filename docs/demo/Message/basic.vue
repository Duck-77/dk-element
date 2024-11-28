<template>
    <div class="message-demo">
        <Button @click="open">Show Message</Button>
        <Button @click="openVNode">Show VNode</Button>
    </div>
</template>
<script setup>
import { h } from 'vue'
import { createDkMessage } from '@/components/Message/method.ts'
import Button from '@/components/Button/button.vue'

const open = () => {
    createDkMessage({
        message: 'This is a message.',
        onClose: () => {
            console.log('close')
        },
    })
}

const openVNode = () => {
    createDkMessage({
        message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode'),
        ]),
    })
}
</script>
<style scoped>
.message-demo {
    display: flex;
    gap: 10px;
}
</style>
