import { rimraf } from 'rimraf'
import { moveFile } from 'move-file'
import path from 'node:path'

const moveMap = {
    'dist/es/index.css': 'dist/index.css',
    'dist/types/src/index.d.ts': 'dist/types/index.d.ts',
    'dist/types/src/components': 'dist/types/components',
    'dist/types/src/hooks': 'dist/types/hooks',
}
const removePaths = ['dist/es/favicon.ico', 'dist/umd/favicon.ico', 'dist/umd/index.css', 'dist/types/src']

const moveFiles = async () => {
    console.log('files moving...⏱')
    for (const [from, to] of Object.entries(moveMap)) {
        try {
            await moveFile(from, to)
            console.log(`\x1b[32mMoved: ${from} -> ${to}\x1b[39m`)
        } catch (e) {
            console.error(`Move failed for ${from} with error: `, e)
        }
    }
    return true
}

const removeFiles = () => {
    console.log('files removinig...⏱')
    removePaths.forEach((path) => {
        rimraf(path)
            .then(() => {
                console.log(`\x1b[32mremove ${path} \x1b[39m`)
            })
            .catch((err) => {
                console.error(`Removed ${path} for failed width error: `, err)
            })
    })
}

moveFiles().then(removeFiles)
