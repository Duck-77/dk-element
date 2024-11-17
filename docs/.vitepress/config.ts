import { defineConfig } from 'vitepress'
import PostcssEach from 'postcss-each'
import PostcssEachVariables from 'postcss-each-variables'
import PostcssFor from 'postcss-for'
import PostcssColorMix from 'postcss-color-mix'
import PostcssNested from 'postcss-nested'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath } from 'url'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Dk-Element',
    description: '一个参考 Element Plus 的 Vue3 组件库',
    vite: {
        plugins: [vueJsx()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('../../src', import.meta.url)),
            },
        },
        css: {
            postcss: {
                plugins: [
                    PostcssNested(),
                    PostcssEachVariables(),
                    PostcssEach({
                        plugins: {
                            beforeEach: [PostcssFor(), PostcssColorMix()],
                        },
                    }),
                ],
            },
        },
    },
    vue: {},
    markdown: {
        config(md) {
            md.use(containerPreview).use(componentPreview)
        },
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
            { text: '快速开始', link: '/markdown-examples' },
            { text: '组件', link: '/components' },
        ],

        sidebar: {
            '/markdown-examples': [
                {
                    text: 'Examples',
                    items: [
                        { text: 'Markdown Examples', link: '/markdown-examples' },
                        { text: 'Runtime API Examples', link: '/api-examples' },
                    ],
                },
            ],
            '/components': [
                {
                    text: 'Basic 基础组件',
                    items: [
                        { text: 'Button', link: '/components/button' },
                        { text: 'Icon', link: '/components/icon' },
                    ],
                },
                {
                    text: 'Form 表单组件',
                    items: [
                        { text: 'Input', link: '/components/input' },
                        { text: 'Radio', link: '/components/radio' },
                        { text: 'Switch', link: '/components/switch' },
                        { text: 'Select', link: '/components/select' },
                        { text: 'Form', link: '/components/form' },
                    ],
                },
                {
                    text: 'Data 数据展示',
                    items: [{ text: 'Collapse', link: '/components/collapse' }],
                },
                {
                    text: 'Navigation 导航',
                    items: [{ text: 'Dropdown', link: '/components/dropdown' }],
                },
                {
                    text: 'Feedback 反馈组件',
                    items: [
                        { text: 'Alert', link: '/components/alert' },
                        { text: 'Message', link: '/components/message' },
                    ],
                },
            ],
        },

        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    },
})
