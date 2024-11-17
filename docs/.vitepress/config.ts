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
    description: '一个仿 Element Plus 的组件库',
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
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/markdown-examples' },
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
                    text: '基础组件',
                    items: [
                        { text: 'Button', link: '/components/button' },
                        { text: 'Radio', link: '/components/radio' },
                        { text: 'Form', link: '/components/form' },
                        { text: 'Collapse', link: '/components/collapse' },
                    ],
                },
                {
                    text: 'Feedback 反馈组件',
                    items: [{ text: 'Alert', link: '/components/alert' }],
                },
            ],
        },

        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    },
})
