---
title: Form | Dk-element
decription: Form 组件文档
---

# Form

## 基础用法

`dk-form` 组件的基础用法，需要配合 `dk-form-item` 组件一起使用

:::preview

demo-preview=../demo/Form/basic.vue

:::

## 对齐方式

可以为 `dk-form-item` 设置 `label-postion` 来设置表单项的对齐方式，如果为空则使用 `dk-form` 的对齐方式。默认对齐方式为 `left`

:::preview

demo-preview=../demo/Form/align.vue

:::

## 表单校验

需要将 rules 对象传递给 `dk-form` ，并在 `dk-form-item` 组件中传入与 rules 以及 modal 中相同的属性名，使用默认的校验规则可以完成表单校验

:::preview

demo-preview=../demo/Form/validate.vue

:::

## 自定义校验规则

在 rules 的校验规则中，可以使用 validator 属性来自定义校验规则, 并可以单独为某一个 `dk-form-item` 传递 rules 或者 required 来覆盖 `dk-form` 上的校验规则

:::preview

demo-preview=../demo/Form/custom-validate.vue

:::

## Form API

### Form Attribute

| 属性名                    | 说明                 | 类型                   | 默认值  |
| ------------------------- | -------------------- | ---------------------- | ------- |
| model                     | 表单数据对象         | `Record<string,any>`   |         |
| reles                     | 标签文本             | `string`               |         |
| labelPosition             | 标签位置             | `left \| right \| top` | `left`  |
| labelWidth                | 标签宽度             | `string \| number`     |         |
| hide-required-asterisk    | 是否为必填项         | `boolean`              | `false` |
| require-asterisk-position | 必填项星号的显示位置 | ` left \| right`       |         |
| showMessage               | 是否显示校验错误信息 | `boolean`              |

### Form Expose

| 名称           | 说明                                                 | 类型                    |
| -------------- | ---------------------------------------------------- | ----------------------- |
| validate       | 对整个表单进行校验                                   | `()=>Promise<any>`      |
| resetFields    | 重置表单项，将表单项的值恢复为初始值，并清空校验状态 | `(keys:string[])=>void` |
| clearValidates | 清空表单的校验状态                                   | `(keys:string[])=>void` |

### FormItem Attribute

| 属性名        | 说明                                  | 类型                   | 默认值  |
| ------------- | ------------------------------------- | ---------------------- | ------- |
| prop          | 用于表单校验的 modal 键名             | `string`               |         |
| label         | 标签文本                              | `string`               |         |
| labelPosition | 标签位置                              | `left \| right \| top` | `left`  |
| labelWidth    | 标签宽度                              | `string \| number`     |         |
| required      | 是否为必填项                          | `boolean`              | `false` |
| rules         | 自定义校验规则                        | ` FormRules`           |         |
| error         | 将当前表单项为错误状态,并显示错误信息 | `string`               |         |
| showMessage   | 是否显示校验错误信息                  | `boolean`              | `true`  |

### FormItem Expose

| 名称           | 说明                                                   | 类型                             |
| -------------- | ------------------------------------------------------ | -------------------------------- |
| validateStatus | 当前表单项的校验状态                                   | `ValidateStatusProps`            |
| validate       | 对单个表单项进行校验                                   | `(trigger:string)=>Promise<any>` |
| resetFields    | 重置该表单项，将表单项的值恢复为初始值，并清空校验状态 | `(keys:string[])=>void`          |
| clearValidates | 清空表单表单项的校验状态                               | `(keys:string[])=>void`          |
