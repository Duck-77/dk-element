<template>
    <div>
        <Alert
            effect="dark"
            content="More text description"
            type="success"></Alert>
        <Alert
            effect="dark"
            content="More text description"
            type="warning"></Alert>
        <Alert
            effect="dark"
            content="More text description"
            type="info"
            content-center>
        </Alert>
        <Alert
            effect="dark"
            content="More text description"
            type="error"></Alert>
    </div>
</template>
<script setup>
import Alert from '@/components/Alert/Alert.vue'
</script>
<style scoped></style>
