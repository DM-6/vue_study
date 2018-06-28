<template>
  <div id="app">
    <comment/>
    <!-- <ele-radio-group v-model="sex">
      <ele-radio label="0">女</ele-radio>
      <ele-radio label="1">男</ele-radio>
    </ele-radio-group> -->
    <!-- <login/>
    <p v-html="content"></p> -->
  </div>
</template>

<script>
// @表示alias 地址短链接 在哪里都指向src 让地址引入更轻松
import Comment from '@/components/Comment'
import EleRadioGroup from '@/components/EleRadioGroup'
import EleRadio from '@/components/EleRadio'
import Login from '@/views/Login'

export default {
  name: 'App',
  components: {
    Comment
    // Login,
    // EleRadioGroup,
    // EleRadio
  },
  data(){
    return{
      sex: 0,
      content: '<span>美团挂了，还有UC</span>'
    }
  }
}
</script>

<style lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

</style>

