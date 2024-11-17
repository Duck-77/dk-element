<template>
    <div class="dropdown-demo">
        <Dropdown
            ref="dropdownRef"
            manual
            :menu-options="menuOptions">
            <Button>dropdown</Button>
        </Dropdown>
        <Button @click="handleOpen">manual-open</Button>
        <Button @click="handleClose">manual-close</Button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'

const dropdownRef = ref()

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

const handleOpen = () => {
    console.log(dropdownRef.value)
    dropdownRef.value.onShow()
}

const handleClose = () => {
    dropdownRef.value.onHide()
}
</script>
<style scoped>
.dropdown-demo {
    display: flex;
    gap: 10px;
}
</style>
