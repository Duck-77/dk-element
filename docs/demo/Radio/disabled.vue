<template>
    <div>
        <DkRadioGroup
            v-model="value1"
            disabled>
            <DkRadio value="1">option1</DkRadio>
            <DkRadio value="2">option2</DkRadio>
            <DkRadio value="3">option3</DkRadio>
        </DkRadioGroup>
    </div>

    <div>
        <DkRadio
            value="1"
            disabled
            v-model="value2"
            >option A</DkRadio
        >
        <DkRadio
            value="2"
            v-model="value2"
            >option B</DkRadio
        >
        <DkRadio
            value="3"
            disabled
            v-model="value2"
            >option C</DkRadio
        >
    </div>
</template>
<script setup>
import { ref } from 'vue'
import DkRadioGroup from '@/components/Radio/src/RadioGroup.vue'
import DkRadio from '@/components/Radio/src/Radio.vue'

const value1 = ref('1')
const value2 = ref('2')
</script>
<style scoped></style>
