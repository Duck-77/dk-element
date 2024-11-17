<template>
    <div class="dropdown-demo">
        <Dropdown :menu-options="menuOptions">
            <Button>click</Button>
        </Dropdown>

        <Dropdown
            :menu-options="menuOptions"
            trigger="hover">
            <Button>hover</Button>
        </Dropdown>
    </div>
</template>
<script setup>
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'
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
<style scoped>
.dropdown-demo {
    display: flex;
    gap: 10px;
}
</style>
