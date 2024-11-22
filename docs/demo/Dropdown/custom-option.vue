<template>
    <Dropdown :menu-options="menuOptions">
        <Button>dropdown</Button>
    </Dropdown>
</template>
<script setup>
import { h } from 'vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/button.vue'
const menuOptions = [
    {
        label: h('span', { style: { color: 'red' } }, 'option1'),
        key: 1,
        disabled: true,
    },
    {
        label: h('span', { style: { color: 'springgreen' } }, 'option2'),
        key: 2,
        divided: false,
    },
    {
        label: h('span', { style: { color: 'skyblue' } }, 'option3'),
        key: 3,
        divided: false,
    },
    {
        label: h('span', { style: { color: 'orange' } }, 'option4'),
        key: 4,
    },
]
</script>
<style scoped></style>
