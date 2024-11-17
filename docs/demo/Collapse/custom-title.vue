<template>
    <div>
        <Collapse v-model="openCollapse">
            <CollapseItem name="a">
                <template #title>
                    <p>
                        <span>What is Quantum Entanglement?</span>
                        <Icon icon="wifi"></Icon>
                    </p>
                </template>
                Quantum entanglement is a fascinating phenomenon where two particles become interconnected, such that
                the state of one instantly influences the state of the other, no matter how far apart they are. It's a
                key concept in quantum computing and quantum communication.
            </CollapseItem>
            <CollapseItem name="b">
                <template #title>
                    <p>
                        <span>Quick Tips to Boost Learning Efficiency</span>
                        <Icon icon="wifi"></Icon>
                    </p>
                </template>
                <ol>
                    <li>Pomodoro Technique: Study for 25 minutes, then take a 5-minute break.</li>
                    <li>Active Recall: Summarize content in your own words to reinforce understanding.</li>
                    <li>Nightly Review: Spend 10 minutes before bed reviewing what you learned during the day.</li>
                </ol>
            </CollapseItem>
            <CollapseItem
                name="c"
                title="Why is Mars' Sky Red?">
                The reddish hue of Mars' sky is due to the fine dust particles rich in iron oxide (rust) suspended in
                its atmosphere, which scatter sunlight and create the planet's iconic appearance.
            </CollapseItem>
            <CollapseItem
                name="d"
                title="Benefits of Morning Exercise">
                The reddish hue of Mars' sky is due to the fine dust particles rich in iron oxide (rust) suspended in
                its atmosphere, which scatter sunlight and create the planet's iconic appearance.
            </CollapseItem>
        </Collapse>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Collapse from '@/components/Collapse/Collapse.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import Icon from '@/components/Icon/Icon.vue'

const openCollapse = ref([])
</script>
<style scoped></style>
