<template>
    <div>
        <head-top signinUp="home">
            <span slot='logo' class="head_logo">ele.me</span>
        </head-top>
        <nav class="city_nav">
            <div class="city_tip">
                <span>当前定位的城市：</span>
                <span>定位不准时，请在城市列表中选择</span>
            </div>
            <router-link :to="`/city/` + guessCityid" class="guess_city">
                <span>{{guessCity}}</span>
            </router-link>
        </nav>
        <section id="hot_city_container">
            <h4 class="city_title">热门城市</h4>
            <ul class="cityListul clear">
                <router-link :to="'/city' + item.id" v-for="item in hotcity" :key="item.id" tag="li">{{item.name}}</router-link>
            </ul>
        </section>
    </div>
</template>

<script>
import headTop from '@/components/headTop.vue'
import { cityGuess, hotcity } from '@/api/getData'   // 引入后解构

export default {
    data(){
        return{
            guessCityid: '',
            guessCity: '',
            hotcity: []
        }
    },
    components: {
        'head-top': headTop
    },
    // 生命周期 获取城市 不那么准确又耗时的API  问题：阻塞组件渲染 不使用created 使用mounted 挂载之后
    async mounted(){    // 同下 这个代码可读性更好
        const cityData = await cityGuess();      // 执行 fetch被执行
        this.guessCityid = cityData.id;
        this.guessCity = cityData.name;
        this.hotcity = await hotcity();
    }    
    // mounted(){     
    //     cityGuess()      // 执行 fetch被执行
    //         .then(res => res.json())
    //         .then(data => {
    //             this.guessCityid = data.id
    //             this.guessCity = data.name
    //         })
    //     hotcity()
    //         .then(res => res.json())
    //         .then(data => {
    //             this.hotcity = data
    //         })
    // }
}
</script>

<style lang="stylus">
@import "../style/mixin"

.city_nav
    padding-top 2.35rem
    border-top 1px solid $bc
    background-color #fff
    margin-bottom 0.4rem

    .city_tip
        fj()
        line-height 1.45rem
        padding 0 0.45rem
        span:nth-of-type(1)     // 选择器 同一类型元素 第一个span 
            sc(0.55rem, #666)
        span:nth-of-type(2)
            font-weight 900
            sc(0.475rem, #9f9f9f)
</style>
