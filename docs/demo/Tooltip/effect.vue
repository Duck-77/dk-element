<template>
    <div class="tooltip-demo">
        <Tooltip
            content="placement"
            trigger="hover"
            effect="light">
            <Button> light </Button>
        </Tooltip>

        <Tooltip
            content="placement"
            trigger="hover">
            <Button> dark </Button>
        </Tooltip>
    </div>
</template>
<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>
<style scoped>
.tooltip-demo {
    display: flex;
    gap: 10px;
    align-items: center;
}
</style>
