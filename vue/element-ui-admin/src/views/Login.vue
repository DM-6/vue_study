<template>
    <div class="login-container">
        <el-form class="login-form" ref="loginForm" autoComplete="on" :model="loginForm" :rules="loginRules" label-position="left">
            <div class="title-container">
                <h3 class="title">系统登录</h3>
            </div>
            <el-form-item prop="username">
                <!-- v-model="loginForm.username"   与数据项绑定  数据双向绑定 -->
                <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名"></el-input>    
            </el-form-item>
            <el-form-item prop="password">
                <!-- autoComplete="on" 自动完成  输入历史 -->
                <el-input name="password" type="password" v-model="loginForm.password" autoComplete="on" @keyup.enter.native="handleLogin" placeholder="请输入密码"></el-input>    
            </el-form-item>
            <el-button type="primary" :loading="loading" style="width: 100%; margin-bottom: 30px;" @click.native.prevent="handleLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script>
import { isvalidateUsername } from '@/utils/validate'    //解构

export default {
    data(){
        const validateUsername = (rule, value, callback) => {
            if(!isvalidateUsername(value)){
                callback(new Error('请输入正确的用户名'))
            } else {
                callback();
            }
        }
        const validatePassword = (rule, value, callback) => {
            if(value.length < 6){
                callback(new Error('密码至少6位'))    //返回一个错误对象
            } else {
                callback();
            }
        }
        return {
            loading: false,
            loginRules: {
                username: [{
                    required: true,    //必填
                    trigger: 'blur',   //触发的一个验证事件
                    validator: validateUsername   //提供一个验证函数
                }],
                password:[{
                    required: true,     //必填
                    trigger: 'blur',   //触发的一个验证事件
                    validator: validatePassword   //提供一个验证函数
                }]
            },
            loginForm: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        handleLogin(){
            // 要做什么？  一验证数据 二
            this.$refs.loginForm.validate(valid => {     // $refs  在vue中找到元素
                if(valid){
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false
                    },2000);
                    console.log('提交');
                }else{
                    console.log('error submit!');
                    return false;
                }
            })   
        }
    }
}
</script>

<style>

</style>
