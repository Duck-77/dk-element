---
title: Select
description: 选择器
---

# Select 选择器

## 基础用法

通过给 dk-select 绑定 v-model，绑定的值会随着选择的值而更新

:::preview

demo-preview=../demo/Select/basic.vue

:::

## 有禁用选项

当选项中存在被添加 `disabled` 属性的项时，该项不可选

:::preview

demo-preview=../demo/Select/have-disabled.vue

:::

## 禁用状态

当为 dk-select 添加 disabled 时，整个 dk-select 不可用

:::preview

demo-preview=../demo/Select/disabled.vue

:::

## 一键清空

当为 dk-select 添加 clearable, 且在输入框有值的情况下，会清空输入框的值

:::preview

demo-preview=../demo/Select/clear.vue

:::

## 筛选选项

当为 dk-select 添加 filterable 时，如果不传递 filter-mothod ，它会遵循默认的筛选策略，就是根据输入的值进行查询， 如果添加了 filter-method 时，才会根据传入的 method 进行筛选

:::preview

demo-preview=../demo/Select/filter.vue

:::

## 远程搜索

当为 dk-select 添加 filterable 时，如果不传递 filter-mothod ，它会遵循默认的筛选策略，就是根据输入的值进行查询， 如果添加了 filter-method 时，才会根据传入的 method 进行筛选

:::preview

demo-preview=../demo/Select/remote.vue

:::

## Select API

### Select Attribute

| 属性名             | 说明                                           | 类型               | 默认值 |
| ------------------ | ---------------------------------------------- | ------------------ | ------ |
| v-model/modelValue | 选择器绑定的值                                 | `string`           | -      |
| options            | 选项数组，类型见下表                           | `SelectOption[]`   | [ ]    |
| placeholder        | 原生属性                                       | `string`           | -      |
| clearable          | 是否开启一键清空功能                           | `boolean`          | false  |
| disabled           | 是否禁用选择器                                 | `boolean`          | false  |
| custom-label       | 自定义 label 标签                              | `RenderLablelFunc` | -      |
| filterable         | 是否开启筛选                                   | `boolean`          | false  |
| filter-mothod      | 筛选方法，需要返回一个 option 类型的数组       | `CustomFilterFunc` | -      |
| remote             | 是否开启远程搜索                               | `boolean`          | false  |
| remote-mothod      | 远程搜索的方法，需要返回一个 option 类型的数组 | `CustomRemoteFunc` | -      |

### Select Events

| 事件名         | 说明                           | 类型                    |
| -------------- | ------------------------------ | ----------------------- |
| change         | 当所选内容改变时触发           | `(value:string)=>void`  |
| visible-change | 当下拉选择框可见状态变化时触发 | `(value:boolean)=>void` |
| clear          | 当点击清空键的触发             | `()=>void`              |

## SelectOption API

### Option Attribute

| 属性名   | 说明             | 类型      | 默认值 |
| -------- | ---------------- | --------- | ------ |
| label    | 选项标签         | `string`  | -      |
| value    | 选项的值         | `string`  | -      |
| disabled | 是否禁用当前选项 | `boolean` | false  |
