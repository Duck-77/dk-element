<template>
    <div class="basic">
        <div class="common">
            <Button size="large">Large</Button>
            <Button size="default">Default</Button>
            <Button size="small">Small</Button>
            <Button size="large" icon="magnifying-glass">Search</Button>
            <Button size="default" icon="magnifying-glass">Search</Button>
            <Button size="small" icon="magnifying-glass">Search</Button>
        </div>
        <div class="round">
            <Button size="large" round>Large</Button>
            <Button size="default" round>Default</Button>
            <Button size="small" round>Small</Button>
            <Button size="large" icon="magnifying-glass" round>Search</Button>
            <Button size="default" icon="magnifying-glass" round>Search</Button>
            <Button size="small" icon="magnifying-glass" round>Search</Button>
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