import axios from 'axios'

const http = axios.create({      // axios.create 提供一个配置
    baseURL: 'https://elm.cangdu.org',
    timeout: 10000
})

export const currentcity = (cityid) => new Promise((resolve,reject) => {
    const url = `/v1/cities/${cityid}`;
    http.get(url)
        .then(res => {
            resolve(res)
        })
})

// lbs lat lng 经纬度   adress 文本？ 不能进行距离计算
export const searchplace = (cityid, keyword) => new Promise((resolve, reject) => {
    const url = `/v1/pois?type=search&city_id=${cityid}&keyword=${keyword}`
    http.get(url)
        .then(res => resolve(res.data))
})
// ajax xhr
// fetch 一兼容性 二api比较原始

export const cityGuess = () => new Promise((resolve,reject) => {
    fetch('https://elm.cangdu.org/v1/cities?type=guess')
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err)) 
})

export const hotcity = () => new Promise((resolve,reject) => {
    fetch('https://elm.cangdu.org/v1/cities?type=hot')
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err)) 
})

export const getcaptchas = () => new Promise((resolve, reject) => {
    fetch('https://elm.cangdu.org/v1/captchas', {
        method: 'POST',    // post提交 更安全
        body: {},
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
})

export const msiteFoodTypes = (geohash) => {
    return new Promise((resolve, reject) => {
        http.get('/v2/index_entry', {
            geohash,
            group_type: '1',
            'flag[]': 'F'
        }).then(res => resolve(res.data))
    })
}