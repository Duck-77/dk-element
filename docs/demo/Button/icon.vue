<template>
    <div class="basic">
        <div class="common">
            <Button type="primary" icon="fa-regular fa-user"></Button>
            <Button type="primary" icon="fa-regular fa-pen-to-square"></Button>
            <Button type="primary" icon="fa-regular fa-envelope"></Button>
            <Button type="primary" icon="fa-regular fa-star"></Button>
            <Button type="primary" icon="fa-regular fa-heart">like</Button>
            <Button type="primary" icon="fa-regular fa-trash-can">Remove</Button>
        </div>
    </div>
</template>
<script setup>
    import Button from '@/components/Button/Button.vue'
</script>
<style scoped>
    .basic {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
</style>