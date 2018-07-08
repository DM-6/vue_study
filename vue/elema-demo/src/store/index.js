// vuex 入口

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

// lbs 应用
// 位置服务（LBS，Location Based Services）又称定位服务，LBS是由移动通信网络和卫星定位系统结合
// 在一起提供的一种增值业务，通过一组定位技术获得移动终端的位置信息（如经纬度坐标数据），提供给移动用户
// 本人或他人以及通信系统，实现各种与位置相关的业务。实质上是一种概念较为宽泛的与空间位置有关的新型服务
// 业务。

const state = {
    latitude: '',        // 经纬度
    longitude: '',
    cartList: {},
    userInfo: null,
    shopId: null,
    products: [],
    shopDetail: null
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})