<template>
    <div>
        <Form
            :model="model"
            :label-position="formLabelPosition">
            <FormItem
                label="Form Align"
                label-position="left">
                <RadioGroup
                    name="form-label-position"
                    v-model="formLabelPosition">
                    <Radio value="left">Left</Radio>
                    <Radio value="right">Right</Radio>
                    <Radio value="top">Top</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem
                label="Form Item Align"
                label-position="left">
                <RadioGroup
                    name="form-item-label-postion"
                    v-model="formItemLabelPosition">
                    <Radio value="">Empty</Radio>
                    <Radio value="left">Left</Radio>
                    <Radio value="right">Right</Radio>
                    <Radio value="top">Top</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem
                label="uname"
                :label-position="formItemLabelPosition">
                <Input v-model="model.username" />
            </FormItem>
            <FormItem
                label="password"
                :label-position="formItemLabelPosition">
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
import Radio from '@/components/Radio/src/Radio.vue'
import RadioGroup from '@/components/Radio/src/RadioGroup.vue'
import { reactive, ref } from 'vue'

const formLabelPosition = ref('')
const formItemLabelPosition = ref('')

const model = reactive({
    username: '',
    password: '',
})

const submit = async () => {}

const reset = () => {}
</script>
<style scoped></style>
