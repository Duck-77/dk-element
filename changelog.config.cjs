module.exports = {
    disableEmoji: false,
    format: '{type}{scope}: {emoji}{subject}',
    list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf',],
    maxMessageLength: 64,
    minMessageLength: 3,
    questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
    scopes: ['api', 'component', 'docs', 'utils', 'ui', 'test', 'config'],
    types: {
        chore: {
            description: '构建过程或辅助工具的更改',
            emoji: '🌈',
            value: 'chore',
        },
        ci: {
            description: 'CI相关更改',
            emoji: '📟',
            value: 'ci',
        },
        docs: {
            description: 'Docs文档相关的更改',
            emoji: '📝',
            value: 'docs',
        },
        feat: {
            description: '新增Feature',
            emoji: '🎉',
            value: 'feat',
        },
        fix: {
            description: '修复Bug',
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
            emoji: '✨',
            value: 'release',
        },
        style: {
            description: '代码格式的更改,例如格式化，空格，分号等',
            emoji: '🍭',
            value: 'style',
        },
        test: {
            description: '添加或修改Test测试',
            emoji: '📈',
            value: 'test',
        },
    },
    messages: {
        type: '选择你要提交的更改类型:',
        customScope: '本次更改影响的范围:',
        subject: '对本次提交的简短描述:\n',
        body: '对本次提交的详细描述:\n ',
        breaking: '列出本次提交的重大更改:\n',
        issues: '本次提交解决的问题，例如 #123:',
        confirmCommit: '本次提交提交影响的包:\n',
    },
}
