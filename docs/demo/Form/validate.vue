<template>
    <div>
        <Form
            ref="formRef"
            :model="model"
            :rules="rules">
            <FormItem
                label="Username"
                prop="username">
                <template #label="scope">
                    {{ scope.label }}
                </template>
                <Input v-model="model.username" />
            </FormItem>
            <FormItem
                label="Password"
                prop="password">
                <Input
                    type="password"
                    v-model="model.password" />
            </FormItem>
            <FormItem
                label="Email"
                prop="email">
                <Input
                    type="email"
                    v-model="model.email" />
            </FormItem>
            <FormItem
                label="Gender"
                prop="gender">
                <RadioGroup v-model="model.gender">
                    <Radio value="1">男</Radio>
                    <Radio value="0">女</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem
                label="Adult"
                prop="adult">
                <Switch v-model="model.adult"> </Switch>
            </FormItem>
            <FormItem
                label="Address"
                prop="address">
                <Select
                    :options="Address"
                    v-model="model.address"></Select>
            </FormItem>
        </Form>
        <div>
            <Button
                type="primary"
                @click="submit">
                Submit</Button
            >
            <Button @click.prevent="reset">Reset</Button>
        </div>
    </div>
</template>
<script setup>
import Form from '@/components/Form/src/Form.vue'
import FormItem from '@/components/Form/src/FormItem.vue'
import Input from '@/components/Input/Input.vue'
import Button from '@/components/Button/Button.vue'
import Select from '@/components/Select/Select.vue'
import Radio from '@/components/Radio/src/Radio.vue'
import RadioGroup from '@/components/Radio/src/RadioGroup.vue'
import Switch from '@/components/Switch/Switch.vue'
import { reactive, ref } from 'vue'

const formRef = ref()

const model = reactive({
    username: '',
    password: '',
    email: '',
    address: '',
    gender: '',
    adult: false,
})

const rules = {
    username: [{ type: 'string', trigger: 'input', max: 5, min: 3 }],
    password: [{ type: 'string', required: true, trigger: 'blur' }],
    email: [{ type: 'email', required: true, trigger: 'blur' }],
    address: [
        { required: true, trigger: 'blur' },
        { type: 'string', required: true, trigger: 'change' },
    ],
    gender: [{ type: 'string', required: true, trigger: 'change' }],
    adult: [{ type: 'boolean', trigger: 'change' }],
}
const Address = [
    {
        label: 'a',
        value: 'a',
    },
    { label: 'b', value: 'b' },
    { label: 'c', value: 'c' },
]

const submit = async () => {
    try {
        await formRef.value.validate()
        console.log('validate succfully')
    } catch (e) {
        console.log('validate failed ', e)
    }
}

const reset = () => {
    formRef.value.clearValidates()
}
</script>
<style scoped></style>
