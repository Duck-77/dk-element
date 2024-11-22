<template>
    <div class="tooltip-demo">
        <Tooltip
            content="tooltip"
            ref="tooltipRef">
            <Button
                disabled
                manual>
                manual tooltip
            </Button>
        </Tooltip>

        <div>
            <Button @click="handleOpen">open</Button>
            <Button @click="handleClose">close</Button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/button.vue'
import { type TooltipExpose } from '@/components/Tooltip/types';

const tooltipRef = ref<TooltipExpose>()

const handleOpen = () => {
    tooltipRef.value?.onShow()
}

const handleClose = () => {
    tooltipRef.value?.onHide()
}
</script>
<style scoped>
.tooltip-demo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}
</style>
