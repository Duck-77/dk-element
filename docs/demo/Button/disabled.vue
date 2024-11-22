<template>
    <div class="basic">
        <div class="common">
            <Button disabled>Default</Button>
            <Button type="primary" disabled>Primary</Button>
            <Button type="success" disabled>Success</Button>
            <Button type="warning" disabled>Warning</Button>
            <Button type="info" disabled>Info</Button>
            <Button type="danger" disabled>Danger</Button>
        </div>
        <div class="plain">
            <Button plain disabled>Default</Button>
            <Button type="primary" plain disabled>Primary</Button>
            <Button type="success" plain disabled>Success</Button>
            <Button type="warning" plain disabled>Warning</Button>
            <Button type="info" plain disabled>Info</Button>
            <Button type="danger" plain disabled>Danger</Button>
        </div>
    </div>
</template>
<script setup>
    import Button from '@/components/Button/button.vue'
</script>
<style scoped>
.basic{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>