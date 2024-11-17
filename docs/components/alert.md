---
title: Alert
description: 提示
---

# Alert 提示

用于在页面中展示重要信息

## 基础用法

:::preview

demo-preview=../demo/Alert/basic.vue

:::

## 主题

:::preview

demo-preview=../demo/Alert/theme.vue

:::

## 自定义关闭按钮

:::preview

demo-preview=../demo/Alert/basic.vue

:::

## 使用图标

:::preview

demo-preview=../demo/Alert/icon.vue

:::

## 文字居中

:::preview

demo-preview=../demo/Alert/center.vue

:::

## 文字描述

:::preview

demo-preview=../demo/Alert/description.vue

:::

## 带图标和描述

:::preview

demo-preview=../demo/Alert/icon-description.vue

:::

## Alert API

### Alert Attribute

| 属性           | 说明           | 类型                            | 默认值  |
| -------------- | -------------- | ------------------------------- | ------- |
| type           | Alert 类型     | `primary\|warning\|info\|error` | --      |
| title          | 文字提示       | `string`                        | --      |
| content        | Alert 内容     | `string`                        | --      |
| show-icon      | 是否显示图标   | `boolean`                       | `false` |
| close-icon     | 自定义关闭图标 | `string`                        | --      |
| closeable      | 是否可以关闭   | `boolean`                       | `false` |
| title-center   | 文字提示居中   | `boolean`                       | `false` |
| content-center | 内容居中       | `boolean`                       | `false` |
| effect         | 主题           | `light\|dark`                   | `light` |

### Alert Events

| 事件名 | 说明               | 类型                 |
| ------ | ------------------ | -------------------- |
| close  | Alert 关闭时的回调 | `(value?:any)=>void` |
