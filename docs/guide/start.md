---
title: 快速开始
descrption: 快速使用dk-ui
---

# 安装

```bash
npm i @duck-77/dk-ui
```

## 使用

### 全局导入

```js
//main.ts
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