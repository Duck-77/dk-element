<template>
    <div>
        <Alert
            show-icon
            title="Success alert"
            content="More text description"
            type="success"></Alert>
        <Alert
            show-icon
            title="Warning alert"
            content="More text description"
            type="warning"></Alert>
        <Alert
            show-icon
            title="Info alert"
            content="More text description"
            type="info">
        </Alert>
        <Alert
            show-icon
            title="Error alert"
            content="More text description"
            type="error"></Alert>
    </div>
</template>
<script setup>
import Alert from '@/components/Alert/alert.vue'
</script>
<style scoped></style>
