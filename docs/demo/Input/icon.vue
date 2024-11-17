<template>
    <div class="input-demo">
        <Input
            v-model="iptval"
            placeholder="Place Input">
            <template #prefix>
                <Icon icon="magnifying-glass"></Icon>
            </template>
        </Input>
    </div>
    <div class="input-demo">
        <Input
            v-model="iptval"
            placeholder="Place Input">
            <template #suffix> 
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
    margin: 8px 0;
}
</style>
