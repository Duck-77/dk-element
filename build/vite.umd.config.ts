/// <reference path="../node_modules/vitest/index.d.cts" />

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

//@ts-ignore
import PostcssEach from 'postcss-each'
//@ts-ignore
import PostcssEachVariables from 'postcss-each-variables'
//@ts-ignore
import PostcssFor from 'postcss-for'
//@ts-ignore
import PostcssColorMix from 'postcss-color-mix'
import PostcssNested from 'postcss-nested'

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        dts({
            insertTypesEntry: true,
            tsconfigPath: './tsconfig.app.build.json',
            outDir: 'dist/types',
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('../src', import.meta.url)),
        },
    },
    css: {
        postcss: {
            plugins: [
                PostcssNested(),
                //@ts-ignore
                PostcssEachVariables(),
                PostcssEach({
                    plugins: {
                        beforeEach: [PostcssFor(), PostcssColorMix()],
                    },
                }),
            ],
        },
    },
    build: {
        outDir: 'dist/umd',
        lib: {
            entry: path.resolve(__dirname, '../src/index.ts'),
            name: 'dkUI',
            fileName: 'dk-ui',
            formats: ['umd'],
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                },
                assetFileNames: (chunk) => {
                    if (chunk.name === 'style.css') {
                        return 'index.css'
                    }
                    return '[name].[ext]'
                },
            },
        },
    },
})
