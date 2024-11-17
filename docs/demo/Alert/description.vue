<template>
    <div>
        <Alert
            title="Success alert"
            content="More text description"
            type="success"></Alert>
        <Alert
            title="Warning alert"
            content="More text description"
            type="warning"></Alert>
        <Alert
            title="Info alert"
            content="More text description"
            type="info">
        </Alert>
        <Alert
            title="Error alert"
            content="More text description"
            type="error"></Alert>
    </div>
</template>
<script setup>
import Alert from '@/components/Alert/Alert.vue'
</script>
<style scoped></style>
