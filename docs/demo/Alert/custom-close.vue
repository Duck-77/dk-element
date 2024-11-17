<template>
    <div>
        <Alert
            close-icon="fa-regular fa-hand"
            content="More text description"
            type="success"></Alert>
        <Alert
            close-icon="fa-regular fa-hand"
            content="More text description"
            type="warning"></Alert>
        <Alert
            close-icon="fa-regular fa-hand"
            content="More text description"
            type="info">
        </Alert>
        <Alert
            close-icon="fa-regular fa-hand"
            content="More text description"
            type="error"></Alert>
    </div>
</template>
<script setup>
import Alert from '@/components/Alert/Alert.vue'
</script>
<style scoped></style>
