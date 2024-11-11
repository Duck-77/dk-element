<script setup lang="ts">
    import { type Placement } from '@floating-ui/vue'
    import { h, ref } from 'vue'
    import Button from './components/Button/Button.vue'
    import Collapse from './components/Collapse/Collapse.vue'
    import CollapseItem from './components/Collapse/CollapseItem.vue'
    import Alert from './components/Alert/Alert.vue'
    import Tooltip from './components/Tooltip/Tooltip.vue'
    import type { TooltipExpose } from './components/Tooltip/types'
    import type { MenuOption } from './components/Dropdown/types'
    import Dropdown from './components/Dropdown/Dropdown.tsx'
    import { DkMessage } from './components/Message/method.ts'
    import Input from './components/Input/Input.vue'
    import type { MessageType } from './components/Message/types.ts'
    import Switch from './components/Switch/Switch.vue'
    import Select from './components/Select/Select.vue'

    const useButton = () => {
        const buttonOpen = ref([])

        return { buttonOpen }
    }

    const useAlert = () => {
        const alertOpen = ref([])
        return {
            alertOpen
        }
    }

    const useTooltip = () => {
        const placement = ref<Placement>('bottom')
        const tooltipOpen = ref([])
        const tooltipShow = ref(false)
        const randoms = ['left', 'right', 'bottom', 'top']

        const handleTooltipToggle = (bool: boolean) => {
            tooltipShow.value = bool
        }

        const tooltipInstance = ref<TooltipExpose>()

        const manaulOpen = () => {
            tooltipInstance.value?.onShow()
        }

        const manaulClose = () => {
            tooltipInstance.value?.onHide()
        }

        const randomPlacement = () => {
            placement.value = randoms[Math.floor(Math.random() * 4)] as Placement
        }

        return {
            placement,
            tooltipOpen,
            handleTooltipToggle,
            manaulOpen,
            manaulClose,
            randomPlacement
        }
    }

    const useDropdown = () => {
        const dropdownRef = ref()
        const dropdownOpen = ref([])
        const menuOptions: MenuOption[] = [
            {
                label: h('h3', 'hello world'),
                key: 1,
                disabled: true
            },
            {
                label: 'option2',
                key: 2,
                divided: false
            },
            {
                label: 'option3',
                key: 3,
                divided: false
            },
            {
                label: 'option4',
                key: 4,
            }
        ]
        return { dropdownRef, dropdownOpen, menuOptions }
    }

    const useInput = () => {
        const inputValue = ref('')
        const inputOpen = ref([])

        return {
            inputValue,
            inputOpen
        }
    }

    const useMessage = () => {
        const messageOpen = ref([])
        const createMessage = () => {
            const types = ['success', 'warning', 'info', 'error']
            const type = types[Math.floor(Math.random() * types.length)] as MessageType
            DkMessage({ message: `This is a ${type} message.`, type, plain: true })
        }

        return { messageOpen, createMessage }
    }

    const useSwitch = () => {
        const swtichOpen = ref([])
        const swtichValue = ref(false)
        const switchLoading = ref(false)

        const switchBeforeChange: () => Promise<boolean> = () => {
            switchLoading.value = true
            return new Promise(resolve => {
                setTimeout(() => {
                    switchLoading.value = false
                    resolve(false)
                    DkMessage({ message: 'Switch faild', type: 'error' })
                }, 1500)
            })
        }

        return {
            swtichOpen,
            swtichValue,
            switchLoading,
            switchBeforeChange
        }
    }

    const useSelect = () => {
        const selectOption = ref([])
        const selectOptions = [
            { label: 'option1', value: '1' },
            { label: 'option2', value: '2' },
            { label: 'option3', value: '3', disabled: true },
            { label: 'option4', value: '4' }
        ]
        const selectValue = ref('3')

        return { selectOption, selectOptions, selectValue }
    }

    const { buttonOpen } = useButton()
    const { alertOpen } = useAlert()
    const { placement, tooltipOpen, handleTooltipToggle, manaulOpen, manaulClose, randomPlacement } = useTooltip()
    const { dropdownRef, dropdownOpen, menuOptions } = useDropdown()
    const { inputValue, inputOpen } = useInput()
    const { messageOpen, createMessage } = useMessage()
    const { swtichOpen, swtichValue, switchLoading, switchBeforeChange } = useSwitch()
    const { selectOption, selectOptions, selectValue } = useSelect()

</script>

<template>
    <main style="overflow: hidden">
        <div>
            <Collapse v-model="buttonOpen">
                <CollapseItem name="button" title="Button 展示">
                    <div style="display: grid; gap: 15px;">
                        <div>
                            <Button>Test Button</Button>
                            <Button plain>Plain Button</Button>
                            <Button round>Round Button</Button>
                        </div>
                        <div>
                            <Button type="primary">Test Button</Button>
                            <Button type="success">Test Button</Button>
                            <Button type="warning">Test Button</Button>
                            <Button type="danger">Test Button</Button>
                            <Button type="info">Test Button</Button>
                        </div>
                        <div>
                            <Button :disabled="true">disabled</Button>
                            <Button type="primary" disabled>Test Button</Button>
                            <Button type="success" disabled>Test Button</Button>
                            <Button type="warning" disabled>Test Button</Button>
                            <Button type="danger" disabled>Test Button</Button>
                            <Button type="info" disabled>Test Button</Button>
                        </div>
                        <div>
                            <Button size="large">Large Button</Button>
                            <Button size="small">Small Button</Button>
                            <Button size="large" loading>loading</Button>
                            <Button size="large" icon="user">user</Button>
                        </div>
                    </div>
                </CollapseItem>
            </Collapse>
        </div>
        <div class="alert">
            <Collapse v-model="alertOpen">
                <CollapseItem name="common" title="Alert 展示">
                    <Alert title="Success alert" content="More text description" type="success"></Alert>
                    <Alert title="Warning alert" content="More text description" type="warning" effect="dark"></Alert>
                    <Alert title="Info alert" content="More text description" type="info" content-center title-center>
                    </Alert>
                    <Alert title="Error alert" content="More text description" type="error"></Alert>
                    <Alert content="More text description" type="success" content-center></Alert>
                    <Alert content="More text description" type="warning"></Alert>
                    <Alert content="More text description" type="info"></Alert>
                    <Alert content="More text description" type="error"></Alert>
                </CollapseItem>
            </Collapse>

        </div>
        <div class="tooltip">
            <Collapse v-model="tooltipOpen">
                <CollapseItem name="tooltip" title="Tooltip 展示" center>
                    <div>
                        <div style="height: 100px; display: flex; justify-content: center;">
                            <Tooltip @visible-change="handleTooltipToggle" content="Hello World" :placement="placement"
                                trigger="click" ref="tooltipInstance" effect="light">
                                <Button @click="randomPlacement">{{ `点击显示Tooltip` }}</Button>
                            </Tooltip>
                        </div>
                        <div class="tooltip-btn">
                            <Button @click="manaulOpen">手动open</Button>
                            <Button @click="manaulClose">手动close</Button>
                        </div>
                    </div>
                </CollapseItem>
            </Collapse>
        </div>
        <div class="dropdown">
            <Collapse v-model="dropdownOpen">
                <CollapseItem name="dropdown" title="Dropdown 展示" center>
                    <div style="height: 200px;">
                        <Dropdown ref="dropdownRef" :menuOptions="menuOptions" effect="light" :hide-on-click="true"
                            transition="drop">
                            <Button>dropdown</Button>
                        </Dropdown>
                    </div>
                </CollapseItem>
            </Collapse>
        </div>
        <div class="message">
            <Collapse v-model="messageOpen">
                <CollapseItem name="message" title="Message 展示" center>
                    <Button @click="createMessage">CreateMessage</Button>
                </CollapseItem>
            </Collapse>
        </div>
        <div class="input">
            <Collapse v-model="inputOpen">
                <CollapseItem name="input" title="Input 展示" center>
                    <div style="display: grid; ">
                        <div>
                            <Input v-model="inputValue" show-password>
                            <template #prepend>
                                https://
                            </template>
                            <template #append>
                                .com
                            </template>
                            <template #prefix>
                                prefix
                            </template>
                            <template #suffix>
                                suffix
                            </template>
                            </Input>
                        </div>
                        <div>
                            <Input v-model="inputValue" type="textarea" />
                        </div>
                    </div>
                </CollapseItem>
            </Collapse>
        </div>
        <div class="switch">
            <Collapse v-model="swtichOpen">
                <CollapseItem name="switch" title="Switch 展示" center>
                    <Switch v-model="swtichValue" :loading="switchLoading" :before-change="switchBeforeChange"
                        icon="fa-regular fa-user" inactive-value="left" active-value="right" active-text="on"
                        inactive-text="off"></Switch>
                </CollapseItem>
            </Collapse>
        </div>
        <div class="select">
            <Collapse v-model="selectOption">
                <CollapseItem name="select" title="Select 展示" center>
                    <Select v-model="selectValue" :options="selectOptions" clearable></Select>
                </CollapseItem>
            </Collapse>
        </div>
    </main>
</template>

<style scoped></style>
