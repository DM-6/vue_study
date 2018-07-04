import shop from '../../api/shop'
import products from './products';

// Store 里的一间库房 modules
// 搬运  actions 动态的 动作 由组件生命周期触发  来请求数据
// 搬的是state 状态数据
// getters 获取状态的get方法   需要的数据清单
// mutations  改变 会计 记录数据量改变  记账

const state = {   // 核心数据
    items: [],
    checkoutStatus: null
}

// vuex store 一棵树 树根rootState   共享数据 products.all
const getters = {    // 对state的计算或处理 修改 返回state  相当于computed 对数据进行加工 
    cartProducts: (state, getters, rootState) => {
        return state.items.map(({id, quantity}) => {     // map() 一个数组换成另一个数组并返回
            const product = rootState.products.all.find(product => product.id === id);
            return {
                id: product.id,
                title: product.title,
                quantity,
                price: product.price
            }
        }) 
    },
    cartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.quantity * product.price
        }, 0);
    }
}  

const actions = {
    addProductToCart({state, commit }, product){
        // console.log(product);
        // 是否已经在购物车？ 　
        if(product.inventory > 0){
            const cartItem = state.items.find(item => item.id === product.id)
            if(!cartItem){
                commit('pushProductToCart', { id: product.id })
            } else{
                commit('incrementItemQuantity', cartItem)
            }
            commit('decrementProductInventory', {id: product.id})
        }　
    }
}
const mutations = {     //改变
    pushProductToCart(state, { id }){
        state.items.push({
            id: id,
            quantity: 1
        }) 
    },
    incrementItemQuantity(state, { id }){
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    }
}

export default {   //返回一个对象
    state,    // 状态 包含需要的数据
    getters,    //  登记 
    actions,    // 动作 搬运工
    mutations   // 状态的改变
}