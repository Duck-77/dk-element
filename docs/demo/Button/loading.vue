<template>
    <div class="basic">
        <div class="common">
            <Button loading>Default</Button>
            <Button type="primary" loading>Primary</Button>
            <Button type="success" loading>Success</Button>
            <Button type="warning" loading>Warning</Button>
            <Button type="info" loading>Info</Button>
            <Button type="danger" loading>Danger</Button>
        </div>
    </div>
</template>
<script setup>
    import Button from '@/components/Button/Button.vue'
</script>
<style scoped>
.basic{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>