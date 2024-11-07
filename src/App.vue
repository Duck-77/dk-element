<script setup lang="ts">
    import { useFloating, type Placement } from '@floating-ui/vue'
    import { computed, onMounted, ref, watchEffect } from 'vue'
    import Button from './components/Button/Button.vue'
    import Collapse from './components/Collapse/Collapse.vue'
    import CollapseItem from './components/Collapse/CollapseItem.vue'
    import type { NameType } from './components/Collapse/types'
    import Icon from './components/Icon/Icon.vue'
    import Alert from './components/Alert/Alert.vue'
    import Tooltip from './components/Tooltip/Tooltip.vue'
    import type { TooltipExpose } from './components/Tooltip/types'
    import type { Options } from '@popperjs/core'
    import type { MenuOption } from './components/Dropdown/types'
    import Dropdown from './components/Dropdown/Dropdown.vue'

    const openValue = ref<NameType[]>(['a'])

    const tooltipOpen = ref(false)

    const btnText = computed(() => tooltipOpen.value ? 'close' : 'open')

    const handleTooltipToggle = (bool: boolean) => {
        tooltipOpen.value = bool
    }

    const placement = ref<Placement>('bottom')

    const randomClick = () => {
        const randoms = ['left', 'right', 'bottom', 'top']
        placement.value = randoms[Math.floor(Math.random() * 4)] as Placement
    }

    const popperOptions = ref<Partial<Options>>({
        // placement: 'left-start',
        // strategy: 'fixed'
    })

    const tooltipInstance = ref<TooltipExpose>()

    const open = () => {
        tooltipInstance.value?.onShow()
    }

    const close = () => {
        tooltipInstance.value?.onHide()
    }

    const menuOptions: MenuOption[] = [
        {
            label: 'option1',
            key: 1,
            disabled: true
        },
        {
            label: 'option2',
            key: 2,
            divided: true
        },
        {
            label: 'option3',
            key: 3,
            divided: true
        },
        {
            label: 'option4',
            key: 4,
        }
    ]

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
            <Button type="primary" disabled>Test Button</Button>
            <Button type="success" disabled>Test Button</Button>
            <Button type="warning" disabled>Test Button</Button>
            <Button type="danger" disabled>Test Button</Button>
            <Button type="info" disabled>Test Button</Button>
            <br />
            <Button size="large">Large Button</Button>
            <Button size="small">Small Button</Button>
            <Button size="large" loading>loading</Button>
            <Button size="large" icon="user">user</Button>
        </div>
        <div class="collapse-display">
            <Collapse v-model="openValue" accordion>
                <CollapseItem name="a" title="Feedback">
                    <div>
                        Operation feedback: enable the users to clearly perceive their operations by style updates and
                        interactive effects;
                    </div>
                    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
                </CollapseItem>
                <CollapseItem name="b" title="b title">
                    <div>this is content b</div>
                </CollapseItem>

                <CollapseItem name="c" title="c title" disabled>
                    <div>this is content c</div>
                </CollapseItem>
            </Collapse>
        </div>
        <div class="icons">
            <!-- <Icon
                icon="user"
                size="2xl"
                type="primary"
                color="red"></Icon> -->
        </div>
        <div class="alert">
            <Alert title="Success alert" content="More text description" type="success"></Alert>
            <Alert title="Warning alert" content="More text description" type="warning" effect="dark"></Alert>
            <Alert title="Info alert" content="More text description" type="info" content-center title-center></Alert>
            <Alert title="Error alert" content="More text description" type="error"></Alert>
            <Alert content="More text description" type="success" content-center></Alert>
            <Alert content="More text description" type="warning"></Alert>
            <Alert content="More text description" type="info"></Alert>
            <Alert content="More text description" type="error"></Alert>
        </div>
        <div class="tooltip">
            <Tooltip @visible-change="handleTooltipToggle" content="Hello World" :placement="placement" trigger="click"
                :popper-options="popperOptions" ref="tooltipInstance">
                <Button @click="randomClick">{{ placement }}</Button>
            </Tooltip>
        </div>
        <Button @click="open">open</Button>
        <Button @click="close">close</Button>

        <div class="dropdown">
            <Dropdown :menuOptions="menuOptions">
                <Button>dropdown</Button>
            </Dropdown>
        </div>
    </main>
</template>

<style scoped>
    main {
        overflow: hidden;
    }

    .tooltip,
    .dropdown {
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
