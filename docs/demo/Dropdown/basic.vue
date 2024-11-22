<template>
    <Dropdown :menu-options="menuOptions"> 
        <Button>dropdown</Button>
    </Dropdown>
</template>
<script setup>
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/button.vue'
const menuOptions = [
    {
        label: 'option1',
        key: 1,
        disabled: true,
    },
    {
        label: 'option2',
        key: 2,
        divided: false,
    },
    {
        label: 'option3',
        key: 3,
        divided: false,
    },
    {
        label: 'option4',
        key: 4,
    },
]
</script>
<style scoped></style>
