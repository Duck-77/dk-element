<template>
    <div class="message-demo">
        <Button @click="open">Show Message</Button>
        <Button @click="openVNode">Show VNode</Button>
    </div>
</template>
<script setup>
import { h } from 'vue'
import { DkMessage } from '@/components/Message/method.ts'
import Button from '@/components/Button/Button.vue'

const open = () => {
    DkMessage({
        message: 'This is a message.',
        onClose: () => {
            console.log('close')
        },
    })
}

const openVNode = () => {
    DkMessage({
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
