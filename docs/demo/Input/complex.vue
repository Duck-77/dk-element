<template>
    <div style="display: flex; flex-direction: column; gap: 15px">
        <Input
            v-model="iptval"
            placeholder="Place Input">
            <template #prepend> Http:// </template>
        </Input>
        <Input
            v-model="iptval"
            placeholder="Place Input">
            <template #append> .com </template>
        </Input>
        <Input
            v-model="iptval"
            placeholder="Place Input">
            <template #prepend>
                <Icon icon="magnifying-glass"></Icon>
            </template>
        </Input>
        <Input
            v-model="iptval"
            placeholder="Place Input">
            <template #append>
                <Icon icon="magnifying-glass"></Icon>
            </template>
        </Input>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Input from '@/components/Input/Input.vue'
import Icon from '@/components/Icon/Icon.vue'


const iptval = ref('')
</script>
<style scoped>
.input-demo {
    width: 220px;
}
</style>
