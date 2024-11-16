---
title: Form | Dk-element
decription: Form 组件文档
---

# Form

## 基础用法

`dk-form` 组件的基础用法，需要配合 `dk-form-item` 组件一起使用

:::preview

demo-preview=../demo/Form/basic.vue

:::

## 对齐方式

可以为 `dk-form-item` 设置 `label-postion` 来设置表单项的对齐方式，如果为空则使用 `dk-form` 的对齐方式。默认对齐方式为 `left`

:::preview

demo-preview=../demo/Form/align.vue

:::

## 表单校验

需要将 rules 对象传递给 `dk-form` ，并在 `dk-form-item` 组件中传入与 rules 以及 modal 中相同的属性名，使用默认的校验规则可以完成表单校验

:::preview

demo-preview=../demo/Form/validate.vue

:::

## 自定义校验规则

在 rules 的校验规则中，可以使用 validator 属性来自定义校验规则

:::preview

demo-preview=../demo/Form/custom-validate.vue

:::
