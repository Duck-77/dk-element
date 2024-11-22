# Dk-UI

一个仿照 [Element-Plus](https://github.com/element-plus/element-plus) 实现的的 Vue3 + TypeScript 组件库项目

## 安装

```bash
npm install @duck-77/dk-ui
```

## 使用

### 全局导入

```js
import { createApp } from 'vue'
import App from './App.vue'

import DKUI from '@duck-77/dk-ui'
import '@duck-77/dk-ui/dist/index.css'

const app = createApp(App)
app.use(DKUI)

app.mount('#app')
```

### 局部导入

```vue
<template>
    <dk-button> button </dk-button>
</template>

<script setup>
import { DkButton } from '@duck-77/dk-ui'
</script>
```
