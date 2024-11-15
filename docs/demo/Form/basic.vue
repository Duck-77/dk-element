<template>
    <div>
        <Form
            :model="model"
            :rules="rules">
            <FormItem
                label="username"
                #label="scope"
                prop="username">
                <Input
                    :placeholder="scope.label"
                    v-model="model.username" />
            </FormItem>
            <FormItem
                label="password"
                #label="scope"
                prop="password">
                <Input
                    type="password"
                    :placeholder="scope.label"
                    v-model="model.password" />
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
import { reactive } from 'vue'

const model = reactive({
    username: '',
    password: '',
})

const rules = {
    username: [{ type: 'string', required: true, trigger: 'blur' }],
    password: [{ type: 'string', required: true, tigger: 'blur' }],
}
</script>
<style scoped></style>
