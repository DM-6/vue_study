<template>
    <div class="loginContainer">
        <head-top headTitle="密码登录" goBack="true">
            <slot name="button"></slot>
        </head-top>
        <img :src="captchCodeImg" v-if="captchCodeImg" style="margin-top:5rem"/>
    </div>
</template>

<script>
import headTop from '@/components/headTop'
import { getcaptchas } from '@/api/getData'

// 业务经验一： navigationBar的封装 提供history（title居中 右边的buttons）
export default {
    data(){
        return {
            captchCodeImg: '',
            codeNumber: null
        }
    },
    components: {
        'head-top': headTop
    },
    methods: {      
        async getCaptchaCode(){    // async 内部有异步处理的函数 
            const res = await getcaptchas();     // getcaptchas()  api 前端封装函数
            console.log(res);
            this.captchCodeImg = res.code;
        }
    },
    mounted(){
        this.getCaptchaCode()
    }
}
</script>

<style>

</style>
