<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <router-link to="/">Home</router-link> |
    <router-link to="/params/198/DM website is very good!">params</router-link> |
    <router-link to="/goHome">goHome</router-link> |
    <router-link to="/goParams/918/i like vue.js">goParams</router-link> |
    <router-link to="/hi1">hi1</router-link> |
    <router-link to="/dm">dm</router-link> |
    <router-link to="345">测试</router-link> |

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
