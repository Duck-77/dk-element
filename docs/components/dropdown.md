---
title: Dropdown
description: 下拉菜单
---

# Dropdown 下拉菜单

## 基础用法

为 `dk-dropdown` 组件添加 `menu-options` 选项，可以设置下拉菜单的内容

:::preview

demo-preview=../demo/Dropdown/basic.vue

:::

## 触发方式

利用 `tigger` 选项可以自定义触发方式，例如 `click` `hover` 等

:::preview

demo-preview=../demo/Dropdown/trigger.vue

:::

## 自定义选项

支持通过将选项值设置为 h 的方式，去自定义选型的内容

:::preview

demo-preview=../demo/Dropdown/custom-option.vue

:::

## 显示位置

默认显示位置是 `bottom` ，还支持额外的例如 `top` `left` `right` `top-start` `top-end` 等方向

:::preview

demo-preview=../demo/Dropdown/placement.vue

:::

## 下拉方法

可以通过设置 `manual` 来开启手动打开和关闭模式，设置 `manual` 后，原有的触发方法会失效，需要通过 `ref` 拿到对应的 `dk-dropdown` 实例，通过实例上的 `onShow` 和 `onHide` 方法手动控制打开和关闭

:::preview

demo-preview=../demo/Dropdown/manual.vue

:::

## Dropdown API

### Dropdown Attribute

| 属性名        | 说明                     | 类型           | 默认值 |
| ------------- | ------------------------ | -------------- | ------ |
| menuOptions   | 菜单项数组               | `MenuOption[]` | []     |
| trigger       | 下拉菜单显示触发方式     | `Trigger`      | click  |
| placement     | 显示位置                 | `Placement`    | bottom |
| manual        | 是否开启手动打开和关闭   | `boolean`      | false  |
| popperOptions | popperjs 配置            | `Options`      | -      |
| showAfter     | 延迟多少毫秒后打开       | `number`       | 0      |
| hideAfter     | 延迟多少毫秒后关闭       | `number`       | 0      |
| hide-on-click | 是否在点击菜单后隐藏菜单 | `boolean`      | true   |

### Dropdown Events

| 事件名         | 说明                         | 类型                       |
| -------------- | ---------------------------- | -------------------------- |
| visible-change | 当下拉菜单出现或者消失时触发 | `(value:boolean)=>void`    |
| select         | 当选择菜单项时触发           | `(value:MenuOption)=>void` |

### Dropdown Expose

| 属性名     | 说明         | 类型               |
| ---------- | ------------ | ------------------ |
| onShow     | 打开下拉菜单 | `()=>void`         |
| onHide     | 关闭下拉菜单 | `()=>void`         |

## DropdownOption API

### DropdowOption Attribute

| 属性名   | 说明           | 类型             | 默认值 |
| -------- | -------------- | ---------------- | ------ |
| label    | 选项的 label   | `string\|VNode`  | -      |
| key      | 选项的值       | `string\|number` | -      |
| disabled | 是否禁用选项   | `boolean`        | false  |
| divided  | 是否插入分割线 | `boolean`        | false  |
