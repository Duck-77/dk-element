---
title: Switch
description: 开关
---

# Swtich 开关

## 基础用法

通过 v-model 来绑定开关， 并可以通过设置 `--dk-switch-on-color` 和 `-dk-switch-off-color` 来改变开关的颜色

:::preview

demo-preview=../demo/Switch/basic.vue

:::

## 尺寸

可以通过 `size` 可以设置不同的开关尺寸 例如 `small` `large`

:::preview

demo-preview=../demo/Switch/size.vue

:::

## 文字描述

可以通过 `--dk-switch-on-color` 和 `-dk-switch-off-color` 来改变开关的颜色

:::preview

demo-preview=../demo/Switch/text.vue

:::

## 显示自定义图标

通过给 `dk-switch` 设置 `icon` 来自定义图标

:::preview

demo-preview=../demo/Switch/icon.vue

:::

## 禁用状态

通过给 `dk-switch` 设置 disabled 来禁用它

:::preview

demo-preview=../demo/Switch/dsiabled.vue

:::

## 加载状态

通过给 `dk-switch` 设置 `loading` 来开启它的加载状态

:::preview

demo-preview=../demo/Switch/loading.vue

:::

## 阻止切换

给 `beforeChange` 传入回调，如果函数返回 `false` 或者一个 `reject` 的 `promise`，则会阻止开关的状态切换

:::preview

demo-preview=../demo/Switch/prevent.vue

:::

## 自定义图标动作图标

通过设置 `active-action-icon` 和 `inactive-action-icon` 分别在开关激活状态和未激活状态显示不同的图标，会覆盖 `icon` 属性设置的图标

:::preview

demo-preview=../demo/Switch/custom-active-icon.vue

:::

## Switch API

### Switch Attribute

| 属性名               | 说明                                              | 类型                      | 默认值 |
| -------------------- | ------------------------------------------------- | ------------------------- | ------ |
| id                   | 原生表单属性                                      | `string`                  | -      |
| name                 | 原生表单属性                                      | `string`                  | -      |
| v-model/modelValue   | 开关绑定的值                                      | `string\|number\|boolean` | -      |
| icon                 | 开关的图标                                        | `string`                  | -      |
| size                 | 开关的尺寸                                        | `large\|small`            | -      |
| disabled             | 是否禁用开关                                      | `boolean`                 | false  |
| loading              | 是否开启开关的加载状态                            | `boolean`                 | false  |
| active-value         | 己活时开关的值                                    | `string\|number\|boolean` | -      |
| inactive-value       | 未激活时开关的值                                  | `string\|number\|boolean` | -      |
| active-text          | 己活时开关的的文本                                | `string`                  | -      |
| inactive-text        | 未激活时开关的文本                                | `string`                  | -      |
| active-action-icon   | 己活时开关的图标                                  | `string`                  | -      |
| inactive-action-icon | 未激活时开关的图标                                | `string`                  | -      |
| before-change        | 用于在开关切换前进行操作，返回 false 则表示不切换 | `CssProperties`           | -      |
| input-style          | 开关样式                                          | `CssProperties`           | -      |

### Switch Events

| 事件名 | 说明             | 类型                                   |
| ------ | ---------------- | -------------------------------------- |
| change | 开关值开遍时触发 | `(value:string\|number\|boolean):void` |
