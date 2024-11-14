<template>
    <DkRadioGroup name="test" v-model="value">
        <DkRadio value="1"></DkRadio>
        <DkRadio value="2"></DkRadio>
        <DkRadio value="3"></DkRadio>
    </DkRadioGroup>
</template>
<script setup>
import { ref } from 'vue';
import DkRadioGroup from '@/components/Radio/src/RadioGroup.vue'
import DkRadio from '@/components/Radio/src/Radio.vue'

const value = ref('222')

</script>
<style scoped></style>
