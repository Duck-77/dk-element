<template>
    <DkRadioGroup
        v-model="value">
        <DkRadio
            value="1"
            label="option1"
            v-model="value"
            >option1</DkRadio
        >
        <DkRadio
            value="2"
            label="option2"
            v-model="value"
            >option2</DkRadio
        >
        <DkRadio
            value="3"
            label="option3"
            v-model="value"
            >option3</DkRadio
        >
    </DkRadioGroup>
</template>
<script setup>
import { ref } from 'vue'
import DkRadioGroup from '@/components/Radio/src/RadioGroup.vue'
import DkRadio from '@/components/Radio/src/Radio.vue'

const value = ref('222')
</script>
<style scoped></style>
