import shop from '../../api/shop'

// Store 里的一间库房 modules
// 搬运  actions 动态的 动作 由组件生命周期触发  来请求数据
// 搬的是state 状态数据
// getters 获取状态的get方法   需要的数据清单
// mutations  改变 会计 记录数据量改变  记账

const state = {   // 核心数据
    all: []
}
const getters = {}
const actions = {
    getAllProducts({ commit }){     // commit  vuex提供的api
        // console.log('货车发动了');
        shop.getProducts(products => {
            // console.log('货车回来了');
            commit('setProducts', products)      // setProducts 检验员
        })
    }
}
const mutations = {
    setProducts(state, products){
        // console.log('入库验收');
        state.all = products;
    },
    decrementProductInventory (state, { id } ){
        const product = state.all.find(product => product.id === id);    // find 将数组循环 如果ID相同，就是find需要的值
        product.inventory--
    }
}

export default {   //返回一个对象
    state,    // 状态 包含需要的数据
    getters,    //  登记 
    actions,    // 动作 搬运工
    mutations   // 状态的改变
}