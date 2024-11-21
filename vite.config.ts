/// <reference path="node_modules/vitest/index.d.cts" />

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

//@ts-ignore
import PostcssEach from 'postcss-each'
//@ts-ignore
import PostcssEachVariables from 'postcss-each-variables'
//@ts-ignore
import PostcssFor from 'postcss-for'
//@ts-ignore
import PostcssColorMix from 'postcss-color-mix'
import PostcssNested from 'postcss-nested'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    test: {
        globals: true,
        include: ['**/*.{spec,test}.?(c|m)[jt]s?(x)'],
        environment: 'jsdom',
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
    }
})
