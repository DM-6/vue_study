<template>
  <div>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list/>
    <shopping-cart/>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList/ProductList'
import ShoppingCart from '@/components/ShoppingCart/ShoppingCart'
export default {
  components: {
    ProductList,
    ShoppingCart
  },
  data () {
    return {

    }
  },
  created () {
  },
  methods: {

  }
}
</script>
