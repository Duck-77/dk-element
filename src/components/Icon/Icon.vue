<template>
    <i class="dk-icon" :class="{
        [`dk-icon-${type}`]: type,
    }" :style="customColor">
        <font-awesome-icon v-bind="filterProps" />
    </i>
</template>
<script setup lang="ts">
    import { computed } from 'vue'
    import { omit } from 'lodash-es'
    import type { IconPoprs } from './types'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    defineOptions({
        name: 'DkIcon',
    })

    const props = defineProps<IconPoprs>()
    const filterProps = computed(() => omit(props, 'type', 'color'))
    const customColor = computed(() => {
        return props.color ? { color: props.color } : {}
    })
</script>
<style scoped></style>
