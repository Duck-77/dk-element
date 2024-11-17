<template>
    <div>
        <Form
            ref="formRef"
            :model="model"
            >
            <FormItem label="username">
                <template #label="scope">
                    {{ scope.label }}
                </template>
                <Input v-model="model.username" />
            </FormItem>
            <FormItem label="password">
                <Input
                    type="password"
                    v-model="model.password" />
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
import { reactive, ref } from 'vue'

const formRef = ref()

const model = reactive({
    username: '',
    password: '',
})

const submit = async () => {}

const reset = () => {}
</script>
<style scoped></style>
