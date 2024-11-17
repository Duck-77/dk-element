---
title: Collapse
descritipn: 折叠面板
---

# Collapse 折叠面板

## 基础用法

折叠面板的基础用法，可以同时展开多个面板

:::preview

demo-preview=../demo/Collapse/basic.vue

:::

## 手风琴效果

每次只能展开一个面板

:::preview

demo-preview=../demo/Collapse/accordion.vue

:::

## 自定义标题

使用 `title` 插槽可以自定义标题的内容，而不仅仅是字符串

:::preview

demo-preview=../demo/Collapse/custom-title.vue

:::

## Collaspe API

### Collaspe Attribute

| 属性               | 说明                              | 类型                    | 默认值  |
| ------------------ | --------------------------------- | ----------------------- | ------- |
| v-model/modelValue | 展开的 CollapiseItem 的 name 数组 | `Array<string\|number>` | `[]`    |
| accordion          | 是否开启手风琴模式                | `boolean`               | `false` |

### Collaspe Events

| 事件名 | 说明                         | 类型                                  |
| ------ | ---------------------------- | ------------------------------------- |
| change | 当打开或关闭 collapse 时触发 | `(value:Array<string\|number>)=>void` |

### Collapse Slots

| 插槽名  | 说明           | 子标签       |
| ------- | -------------- | ------------ |
| default | 自定义默认内容 | CollapseItem |

## CollapseItem API

### CollaspeTtem Attribute

| 属性     | 说明                              | 类型                     | 默认值  |
| -------- | --------------------------------- | ------------------------ | ------- |
| name     | 展开的 CollapiseItem 的 name 数组 | `Array<string\| number>` | `[]`    |
| title    | 是否开启手风琴模式                | `boolean`                | `false` |
| disabled | 是否禁用该 item                   | `boolean`                | `false` |
| center   | 是否将内容居中                    | `boolean`                | `false` |

### CollaspeItem Slots

| 插槽名  | 说明             | 类型 |
| ------- | ---------------- | ---- |
| default | 自定义默认内容   | -    |
| title   | 自定义折叠项标题 | -    |
