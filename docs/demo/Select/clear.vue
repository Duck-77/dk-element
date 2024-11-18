<template>
    <div class="select-demo">
        <Select
            :options="selectOptions"
            v-model="selectVal"
            placeholder="Select"
            clearable>
        </Select>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Select from '@/components/Select/Select.vue'
const selectOptions = [
    { label: 'option1', value: '1' },
    { label: 'option2', value: '2' },
    { label: 'option3', value: '3' },
    { label: 'option4', value: '4' },
]
const selectVal = ref('')
</script>
<style scoped></style>
