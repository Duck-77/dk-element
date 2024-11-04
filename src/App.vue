<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import type { NameType } from './components/Collapse/types'

const openValue = ref<NameType[]>(['c'])

</script>

<template>
    <main>
        <div class="button-display">
            <Button>Test Button</Button>
            <Button plain>Plain Button</Button>
            <Button round>Round Button</Button>
            <br />
            <Button type="primary">Test Button</Button>
            <Button type="success">Test Button</Button>
            <Button type="warning">Test Button</Button>
            <Button type="danger">Test Button</Button>
            <Button type="info">Test Button</Button>
            <br />
            <Button :disabled="true">disabled</Button>
            <Button
                type="primary"
                disabled
                >Test Button</Button
            >
            <Button
                type="success"
                disabled
                >Test Button</Button
            >
            <Button
                type="warning"
                disabled
                >Test Button</Button
            >
            <Button
                type="danger"
                disabled
                >Test Button</Button
            >
            <Button
                type="info"
                disabled
                >Test Button</Button
            >
            <br />
            <Button size="large">Large Button</Button>
            <Button size="small">Small Button</Button>
        </div>
        <div class="collapse-display">
            <Collapse
                v-model="openValue"
                accordion>
                <CollapseItem name="a">
                    <template #title>
                        <h1>a title</h1>
                    </template>
                    <h1>headline title</h1>
                    <div>this is content a</div>
                </CollapseItem>
                <CollapseItem
                    name="b"
                    title="b title">
                    <div>this is content b</div>
                </CollapseItem>

                <CollapseItem
                    name="c"
                    title="c title"
                    disabled>
                    <div>this is content c</div>
                </CollapseItem>
            </Collapse>
        </div>
    </main>
</template>

<style scoped></style>
