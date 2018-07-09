module.exports = {
    env:{
        es6: true,
        node: true
    },
    extends: 'eslint:recommended',
    rules:{
        quotes: ['error', 'single'],     //引号  使用单引号
        semi: ['error', 'always'],    // ;分号   每一句以分号结尾
        indent: ['error', 4],     // 空格  两个
        // 'linebreak-style': ['error', 'unix']     // 换行风格
    }
}
