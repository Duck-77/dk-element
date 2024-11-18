<template>
    <div class="tooltip-demo">
        <Tooltip content="bottom" placement="bottom">
            <Button> bottom </Button>
        </Tooltip>
        <Tooltip content="top" placement="top">
            <Button> top </Button>
        </Tooltip>
        <Tooltip content="left" placement="left">
            <Button> left </Button>
        </Tooltip>
        <Tooltip content="right" placement="right">
            <Button> right </Button>
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
}
</style>
