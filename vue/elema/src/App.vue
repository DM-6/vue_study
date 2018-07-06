<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tabs">
      <div class="tab-item"><router-link to="/goods">商品</router-link> </div>
      <div class="tab-item"><router-link to="/ratings">评论</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import vHeader from '@/components/vHeader/vHeader'
const ERR_OK = 0;
export default {
  name: 'App',
  components: {
    vHeader
  },
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('api/seller').then((res)=>{
      res = res.body;
      if(res.errno === ERR_OK){
        this.seller = res.data
        console.log(this.seller)
      }
    });
  },
}
</script>
<style lang="stylus" scoped>
@import "./common/stylus/mixin.styl"
  .tabs
    display flex
    height 40px
    line-height 40px
    border-1px(rgba(7,17,27,.1))
    .tab-item
      flex 1
      text-align center
      font-size 14px
      color rgb(77,85,93)
    .active
      color red
</style>
