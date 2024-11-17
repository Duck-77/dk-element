---
title: Message
description: 消息提示
---

# Message 消息提示

## 基础用法

:::preview

demo-preview=../demo/Message/basic.vue

:::

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

:::preview

demo-preview=../demo/Message/status.vue

:::

## Plain

设置 `plain` 为 plain 样式

:::preview

demo-preview=../demo/Message/plain.vue

:::

## 可关闭消息

设置 `showClose` 将显示关闭图标，点击可以提前关闭消息提示,默认情况下，`dk-message` 的 `duration` 为 3000 毫秒，你可以将它设置为 0 来表示不会自动关闭

:::preview

demo-preview=../demo/Message/close.vue

:::

## 自定义图标

通过设置 `icon` 来自定义消息前面的图标

:::preview

demo-preview=../demo/Message/icon.vue

:::

## Message API

### Message Attribute

| 属性名    | 说明                | 类型            | 默认值 |
| --------- | ------------------- | --------------- | ------ |
| message   | 消息提示            | `string\|VNode` | -      |
| duration  | 消息持续时间        | `number`        | 3000   |
| showClose | 是否可以关闭消息    | `boolean`       | false  |
| type      | 消息类型            | `MessageType`   | info   |
| offset    | y 轴偏移量          | `number`        | 20     |
| plain     | 是否开启 plain 样式 | `boolean`       | false  |
| icon      | 自定义消息图标      | `string`        | -      |
| onDestory | 消息关闭后的回调    | `()=>any`       | -      |

### Message Events

在使用 `DkMessage` 时，将方法作为属性传递给 `DkMessage` 方法

| 事件名       | 说明                     | 类型       |
| ------------ | ------------------------ | ---------- |
| onShow       | 消息提示开始显示时的回调 | `()=>void` |
| onClose      | 消息提示自动关闭时的回调 | `()=>void` |
| onClickClose | 消息提示手动关闭时的回调 | `()=>void` |
