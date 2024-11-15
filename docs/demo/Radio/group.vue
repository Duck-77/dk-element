<template>
    <DkRadioGroup
        v-model="value">
        <DkRadio
            value="1"
            >option A</DkRadio
        >
        <DkRadio
            value="2"
            >option B</DkRadio
        >
        <DkRadio
            value="3"
            >option C</DkRadio
        >
    </DkRadioGroup>

</template>
<script setup>
import { ref } from 'vue'
import DkRadioGroup from '@/components/Radio/src/RadioGroup.vue'
import DkRadio from '@/components/Radio/src/Radio.vue'

const value = ref('1')
</script>
<style scoped></style>
