<template>
    <div>
        <Alert
            show-icon
            content="More text description"
            content-center
            type="success"></Alert>
        <Alert
            show-icon
            content="More text description"
            content-center
            type="warning"></Alert>
        <Alert
            show-icon
            content="More text description"
            content-center
            type="info">
        </Alert>
        <Alert
            show-icon
            content="More text description"
            content-center
            type="error"></Alert>
    </div>
</template>
<script setup>
import Alert from '@/components/Alert/alert.vue'
</script>
<style scoped></style>
