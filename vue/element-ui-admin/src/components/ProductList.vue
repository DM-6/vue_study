<template>
    <ul>
        <li v-for="(product, index) in products" :key="index">
            {{product.title}} - {{ product.price | currency }}
            <!-- | 左边：原始数据 价格  右边：过滤处理 -->
            <br>
            <button :disabled="!product.inventory" @click="addProductToCart(product)">Add to cart</button>
             <!-- :disabled="!product.inventory"  库存为0即为假时，禁用 -->
        </li>
    </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: mapState({      // map 映射  mapState 匹配仓库里state状态
    // 读取状态 map
        products: state => state.products.all
    }),
    methods: mapActions([
        'addProductToCart'
    ]),
    created(){
        this.$store.dispatch('getAllProducts');        // dispatch 触发动作
    }
}
</script>

<style>

</style>
