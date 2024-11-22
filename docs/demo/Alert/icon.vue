<template>
    <div>
        <Alert
            show-icon
            content="More text description"
            type="success"></Alert>
        <Alert
            show-icon
            content="More text description"
            type="warning"></Alert>
        <Alert
            show-icon
            content="More text description"
            type="info">
        </Alert>
        <Alert
            show-icon
            content="More text description"
            type="error"></Alert>
    </div>
</template>
<script setup>
import Alert from '@/components/Alert/alert.vue'
</script>
<style scoped></style>
