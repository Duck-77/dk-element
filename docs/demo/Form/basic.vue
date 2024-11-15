<template>
    <div>
        <Form
            :model="model"
            :rules="rules">
            <FormItem
                label="username"
                prop="username">
                <template #label="scope">
                    {{ scope.label }}
                </template>
                <Input v-model="model.username" />
            </FormItem>
            <FormItem
                label="password"
                prop="password">
                <Input
                    type="password"
                    v-model="model.password" />
            </FormItem>
            <FormItem
                label="email"
                prop="email">
                <template #default="{ validate }">
                    <input
                        v-model="model.email"
                        @blur="validate" />
                </template>
            </FormItem>
        </Form>
        <div>
            <Button type="primary"> Submit</Button>
            <Button>Reset</Button>
        </div>
    </div>
</template>
<script setup>
import Form from '@/components/Form/src/Form.vue'
import FormItem from '@/components/Form/src/FormItem.vue'
import Input from '@/components/Input/Input.vue'
import Button from '@/components/Button/Button.vue'
import { reactive, watchEffect } from 'vue'

const model = reactive({
    username: '',
    password: '',
    email: '',
})

const rules = {
    username: [{ type: 'string', required: true, trigger: 'blur', max: 5, min: 3 }],
    password: [{ type: 'string', required: true, trigger: 'blur' }],
    email: [{ type: 'email', required: true, trigger: 'blur' }],
}
</script>
<style scoped></style>
