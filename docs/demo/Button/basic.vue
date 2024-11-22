<template>
    <div class="basic">
        <div class="common">
            <Button>Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="info">Info</Button>
            <Button type="danger">Danger</Button>
        </div>
        <div class="plain">
            <Button plain>Default</Button>
            <Button type="primary" plain>Primary</Button>
            <Button type="success" plain>Success</Button>
            <Button type="warning" plain>Warning</Button>
            <Button type="info" plain>Info</Button>
            <Button type="danger" plain>Danger</Button>
        </div>
        <div class="round">
            <Button round>Default</Button>
            <Button type="primary" round>Primary</Button>
            <Button type="success" round>Success</Button>
            <Button type="warning" round>Warning</Button>
            <Button type="info" round>Info</Button>
            <Button type="danger" round>Danger</Button>
        </div>
        <div class="circle">
            <Button icon="fa-regular fa-user" circle></Button>
            <Button type="primary" icon="fa-regular fa-pen-to-square" circle></Button>
            <Button type="success" icon="fa-regular fa-heart" circle></Button>
            <Button type="warning" icon="fa-regular fa-star" circle></Button>
            <Button type="info" icon="fa-regular fa-envelope" circle></Button>
            <Button type="danger" icon="fa-regular fa-trash-can" circle></Button>
        </div>
    </div>
</template>
<script setup>
    import Button from '@/components/Button/button.vue'
</script>
<style scoped>
    .basic {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
</style>