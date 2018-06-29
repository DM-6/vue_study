import request from '@/utils/request'

export function fetchList(query){
    return request({    // 请求 公共的  方法 utils     声明向哪个地址请求数据
        url: '/article/list',
        method: 'get',
        params: query
    })
}