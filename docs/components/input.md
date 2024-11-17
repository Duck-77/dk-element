---
title: Input
decription: 输入框
---

# Input 输入框

用于输入字符

## 基础用法

:::preview

demo-preview=../demo/Input/basic.vue

:::

## 禁用状态

将 `disabled` 属性添加到 `dk-input` 使输入框进入禁用状态

:::preview

demo-preview=../demo/Input/disabled.vue

:::

## 一键清空

将 `clearable` 属性添加到 `dk-input` 会显示清空输入框的图标，点击图标就可以一键清空输入框的值

:::preview

demo-preview=../demo/Input/clear.vue

:::

## 密码框

通过设置 `showPassword` 或者 `type` 为 password 都可以将输入框设置为密码框，并可以切换显示与隐藏

:::preview

demo-preview=../demo/Input/password.vue

:::

## 带图标的输入框

可以通过给 `append` `suffix` `preffix` `prepend` 插槽添加不同的图标来来让输入框带有图标

:::preview

demo-preview=../demo/Input/icon.vue

:::

## 文本域

将 `type` 设置为 `textarea` 就可以切换到文本域输入框

:::preview

demo-preview=../demo/Input/textarea.vue

:::

## 尺寸

设置 `size` 属性为 `large` 和 `samll` 可以切换不同的大小

:::preview

demo-preview=../demo/Input/size.vue

:::

通过 `prepend` 和 `append` 插槽可以实现输入框与其他内容的复合

## 复合型输入框

:::preview

demo-preview=../demo/Input/complex.vue

:::

## Input API

### Input Attribute

| 属性名             | 说明                     | 类型            | 默认值 |
| ------------------ | ------------------------ | --------------- | ------ |
| v-model/modelValue | 输入框绑定的值           | `string`        | -      |
| type               | 输入框类型，支持原生类型 | `string`        | text   |
| disabled           | 是否禁用输入框           | `boolean`       | false  |
| clearable          | 是否显示一键清空按键     | `boolean`       | false  |
| showPassword       | 是否显示密码显示切换图标 | `boolean`       | false  |
| placeholder        | 原生属性                 | `string`        | -      |
| realonly           | 是否只读                 | `boolean`       | false  |
| autocomplete       | 原生属性                 | `string`        | -      |
| autofocus          | 原生属性                 | `boolean`       | false  |
| form               | 原生属性                 | `string`        | -      |
| inputStyle         | 输入框样式               | `CssProperties` | -      |

### Input Events

| 事件名 | 说明                         | 类型                      |
| ------ | ---------------------------- | ------------------------- |
| input  | 输入时触发                   | `(value:string):void`     |
| change | 输入框值改变且失去焦点时触发 | `(value:string):void`     |
| focus  | 输入框聚焦时触发             | `(value:string):void`     |
| blur   | 输入框失去焦点时触发         | `(value:FocusEvnet):void` |
| clear  | 清空输入框时触发             | `(value:FocusEvnet):void` |

### Input Expose

| 属性名 | 说明                      | 类型       |
| ------ | ------------------------- | ---------- |
| ref    | 输入框或文本域的 DOM 节点 | `()=>void` |
| clear  | 清除输入框的值            | `()=>void` |
| focus  | 使输入框获取焦点          | `()=>void` |
| blur   | 使输入框失去焦点          | `()=>void` |
| select | 选中输入框中的文本        | `()=>void` |
