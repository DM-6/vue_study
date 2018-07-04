<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!products.length">
            <i>Please add some products to cart</i>
        </p>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{product.title}} - {{product.price | currency }} * {{product.quantity}}
            </li>
        </ul>
        <p>Total: {{total | currency}}</p>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    computed: {
        // items(state){
        //     return state.cart.items
        // },
        // checkoutStatus(state){
        //     return state.cart.checkoutStatus
        // }
        // 上一部分与下面...mapState({})效果一样
        ...mapState({      // map 映射  mapState 匹配仓库里state状态   ...展开运算符 展开的是mapState()的对象
        // 读取状态 map
            items: state => state.cart.items,
            checkoutStatus: state => state.cart.checkoutStatus
        }),
        ...mapGetters({
            products: 'cartProducts',
            total: 'cartTotalPrice'
        })
    }
    
}
</script>

<style>

</style>
