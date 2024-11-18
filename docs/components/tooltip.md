---
title: Tooltip
description: 文字提示
---

# Swtich 文字提示

## 基础用法

传递 content 属性给 dk-element 以提示对应内容

:::preview

demo-preview=../demo/Tooltip/basic.vue

:::

## 主题

传递 content 属性给 dk-element 以提示对应内容

:::preview

demo-preview=../demo/Tooltip/effect.vue

:::

## 不同方向

## 主题

传递 content 属性给 dk-element 以提示对应内容

:::preview

demo-preview=../demo/Tooltip/placement.vue

:::

## 触发方法

可以设置 `manual` 属性，并通过 `ref` 获取 `dk-tooltip` 实例，并调用 `onShow` 和 `onHide` 方法手动控制 `dk-tooltip` 的打开和关闭

:::preview

demo-preview=../demo/Tooltip/manual.vue

:::

## Tooltip API

### Tooltip Attribute

| 属性名         | 说明                                            | 类型          | 默认值 |
| -------------- | ----------------------------------------------- | ------------- | ------ |
| content        | 文字提示的内容                                  | `string`      | -      |
| trigger        | 文字提示触发方式                                | `Trigger`     | click  |
| placement      | 默认显示位置                                    | `Placement`   | bottom |
| manual         | 是否开启手动显示与关闭                          | `boolean`     | -      |
| popper-options | popper 配置，会覆盖 trigger 以及 placement 配置 | `Options`     | -      |
| transition     | 自定义显示动画，详见 vue 的 Transition 组件     | `string`      | fade   |
| show-after     | 延迟多少毫秒后打开                              | `number`      | 0      |
| hide-after     | 延迟多少毫秒后关闭                              | `number`      | 0      |
| effect         | 弹出层主题                                      | `light\|dark` | dark   |

### Tooltip Events

| 事件名        | 说明                                    | 类型                    |
| ------------- | --------------------------------------- | ----------------------- |
| click-outside | 当 tooltip 显示时，点击外侧的触发的事件 | `(value:boolean)=>void` |

### Tooltip Expose

| 属性名     | 说明                | 类型       |
| ---------- | ------------------- | ---------- |
| tooltipRef | dk-tooltip 组件 DOM | -          |
| contentRef | 弹出层内容 DOM      | -          |
| onShow     | 控制弹出层显示      | `()=>void` |
| onHide     | 控制弹出层关闭      | `()=>void` |
