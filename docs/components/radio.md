---
title: Radio | Dk-Element
description: Radio 组件文档
---

# Radio 多选框

## 基础用法

:::preview

demo-preview=../demo/radio/basic.vue

:::

## 禁用状态

:::preview

demo-preview=../demo/radio/disabled.vue

:::

## 单选框组

使用 `radio-group` 将 `radio` 包裹，并将值传递给 `radio-group` 的 modelValue，可以实现与单个多选框同样的效果

:::preview

demo-preview=../demo/radio/group.vue

:::

## 带有边框

为 `radio` 或 `radio-group` 传递 border 属性可以为单选框添加边框

:::preview

demo-preview=../demo/radio/border.vue

:::

## 不同尺寸

为 `radio` 或 `radio-group` 设置 size，可以调整 radio 的大小，支持 `small` `default` (默认值) `large`

:::preview

demo-preview=../demo/radio/size.vue

:::

## Radio API

### Radio Attributes

| 属性名                | 说明               | 类型                        | 默认值    |
| --------------------- | ------------------ | --------------------------- | --------- |
| modeleValue / v-model | 选中项绑定的值     | `string` `number` `boolean` | -         |
| label                 | 单选框的 label     | `string` `number` `boolean` | -         |
| value                 | 单选框的 value     | `string` `number` `boolean` | -         |
| size                  | 单选框的尺寸       | `small` `default` `large`   | `default` |
| border                | 是否显示单选框边框 | `string` `number` `boolean` | `false`   |
| dsiabled              | 是否禁用单选框     | `string` `number` `boolean` | `false`   |
| name                  | 原始 `name` 属性   | `string`                    | -         |

### Radio Events

| 事件名 | 说明                 | 类型                          |
| ------ | -------------------- | ----------------------------- |
| change | 选中值发生变化时触发 | `(value:'number\|string\|boolean')=>void` |

### Radio Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |

### RadioGroup Attributes

| 属性名                | 说明                   | 类型                        | 默认值    |
| --------------------- | ---------------------- | --------------------------- | --------- |
| modeleValue / v-model | 选中项绑定的值         | `string` `number` `boolean` | -         |
| size                  | 组内单选框的尺寸       | `small` `default` `large`   | `default` |
| border                | 是否显示组内单选框边框 | `string` `number` `boolean` | `false`   |
| dsiabled              | 是否禁用组内单选框     | `string` `number` `boolean` | `false`   |
| id                    | 原始 `id` 属性         | `string`                    | -         |
| name                  | 原始 `name` 属性       | `string`                    | -         |

### RadioGroup Events

| 事件名 | 说明                 | 类型                          |
| ------ | -------------------- | ----------------------------- |
| change | 绑定值发生变化时触发 | `(value:'number\|string\|boolean')=>void` |

### RadioGroup Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |
