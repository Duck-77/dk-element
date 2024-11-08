module.exports = {
    disableEmoji: false,
    format: '{type}{scope}: {emoji}{subject}',
    list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
    maxMessageLength: 64,
    minMessageLength: 3,
    questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
    scopes: [],
    types: {
        chore: {
            description: '构建过程或辅助工具的更改',
            emoji: '🤖',
            value: 'chore',
        },
        ci: {
            description: 'CI（持续集成）相关更改',
            emoji: '🎡',
            value: 'ci',
        },
        docs: {
            description: '仅文档相关的更改',
            emoji: '✏️',
            value: 'docs',
        },
        feat: {
            description: '新增功能',
            emoji: '🎸',
            value: 'feat',
        },
        fix: {
            description: '修复错误',
            emoji: '🐛',
            value: 'fix',
        },
        perf: {
            description: '提高性能的代码更改',
            emoji: '⚡️',
            value: 'perf',
        },
        refactor: {
            description: '既不修复错误也不新增功能的代码更改',
            emoji: '💡',
            value: 'refactor',
        },
        release: {
            description: '创建一个发布提交',
            emoji: '🏹',
            value: 'release',
        },
        style: {
            description: '仅格式相关的更改，例如空格、分号等',
            emoji: '💄',
            value: 'style',
        },
        test: {
            description: '添加缺失的测试',
            emoji: '💍',
            value: 'test',
        },
        messages: {
            type: '选择你要提交的更改类型:',
            customScope: '选择此组件影响的范围:',
            subject: '写一个简短的、更改描述:\n',
            body: '提供更改的详细描述:\n ',
            breaking: '列出任何重大更改:\n',
            footer: '此提交关闭的问题，例如 #123:',
            confirmCommit: '此提交影响的包:\n',
        },
    },
}
