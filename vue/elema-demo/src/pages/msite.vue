<template>
    <div></div>
</template>

<script>
import { cityGuess } from '@/api/getData'

export default {
    data(){
        return{
            geohash: ''
        }
    },
    // msite 是由一个独立的项目组做的 多个spa 组成
    async beforeMount(){
        if(this.$route.query.geohash){
            this.geohash = this.$route.query.geohash
            // this.geohash = this.$route.params.geohash    params 与 query的区别
        } else{
            const data = await cityGuess();
            console.log(data);
            this.geohash = `${data.latitude}, ${data.longitude}`
        }
    }
}
</script>

<style>

</style>
