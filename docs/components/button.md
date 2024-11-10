---
title: Button | Dk-Element
description: Button 组件文档
---

# Button

常用的操作按钮

## 基础用法

可以使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式

:::preview

demo-preview=../demo/Button/basic.vue

:::

## 禁用状态

可以使用 `disabled` 属性来定义按钮是否被禁

:::preview

demo-preview=../demo/Button/disabled.vue

:::

## 加载状态按钮

通过给按钮添加 `loading` 属性来定义按钮是否为加载状态

:::preview

demo-preview=../demo/Button/loading.vue

:::

## 调整尺寸

通过给按钮添加 `size` 属性来定义按钮大小  
`size` 属性接受三个值 `large`、`default`、`small`

:::preview

demo-preview=../demo/Button/size.vue

:::

## 图标按钮

通过给按钮添加 `icon` 属性太定义按钮图标

:::preview

demo-preview=../demo/Button/icon.vue

:::

## Button API

### Button 属性

| 属性名     | 说明             | 类型                                          | 默认值    |
| ---------- | ---------------- | --------------------------------------------- | --------- |
| type       | 按钮类型         | `primary` `success` `warning` `info` `danger` | -         |
| size       | 按钮尺寸         | `large` `default` `small`                     | `default` |
| plain      | 是否为朴素按钮   | `boolean`                                     | `false`   |
| round      | 是否为圆角按钮   | `boolean`                                     | `false`   |
| circle     | 是否为圆形按钮   | `boolean`                                     | `false`   |
| disabled   | 是否禁用按钮     | `boolean`                                     | `false`   |
| nativeType | 原生按钮类型     | `NativeType`                                  | `button`  |
| autofocus  | 是否自动获得焦点 | `boolean`                                     | `false`   |
| icon       | 按钮图标的类名   | `string`                                      | —         |
| loading    | 是否显示加载状态 | `boolean`                                     | `false`   |

### Button 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 默认插槽 |
