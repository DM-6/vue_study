// 文件引用 按文件引用顺序打包文件 文件依赖
// 通过模块化方案 引入src内文件
require('./styles/normalize')
require('./styles/index')

const format = require('utils/format')
const { log } = require('./utils')

log(format('hello world'))

document.querySelector('.superman').style.display = 'block'

_.map([1, 2, 3], (item) => item * 2)
log(_.map([1, 2, 3], (item) => item * 2))