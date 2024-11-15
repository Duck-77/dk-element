<template>
    <div>
        <DkRadioGroup
            v-model="value1"
            size="small"
            border>
            <DkRadio value="1">option A</DkRadio>
            <DkRadio value="2">option B</DkRadio>
            <DkRadio value="3" disabled>option C</DkRadio>
        </DkRadioGroup>
    </div>
    <div>
        <DkRadioGroup
            v-model="value2"
            border>
            <DkRadio value="1">option A</DkRadio>
            <DkRadio value="2">option B</DkRadio>
            <DkRadio value="3" disabled>option C</DkRadio>
        </DkRadioGroup>
    </div>
    <div>
        <DkRadioGroup
            v-model="value3"
            size="large"
            border>
            <DkRadio value="1">option A</DkRadio>
            <DkRadio value="2">option B</DkRadio>
            <DkRadio value="3" disabled>option C</DkRadio>
        </DkRadioGroup>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import DkRadioGroup from '@/components/Radio/src/RadioGroup.vue'
import DkRadio from '@/components/Radio/src/Radio.vue'

const value1 = ref('1')
const value2 = ref('1')
const value3 = ref('1')
</script>
<style scoped>
div{
    margin-bottom: 10px;
}
</style>
