<template>
    <div>
        <Form>
            <FormItem
                label="username"
                #label="scope">
                <Input :placeholder="scope.label" />
            </FormItem>
            <FormItem
                label="password"
                #label="scope">
                <Input
                    type="password"
                    :placeholder="scope.label" />
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
</script>
<style scoped></style>
