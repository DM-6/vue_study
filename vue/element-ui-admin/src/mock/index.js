import Mock from 'mockjs'
import articleAPI from './article'

Mock.mock(/\/article\/list/, 'get', articleAPI.getList)    // mockjs的API  mock构造URL地址   articleAPI.getlist文章模块 伪造列表假数据
export default Mock      //向外输出Mock对象