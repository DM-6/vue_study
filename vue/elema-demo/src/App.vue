<template>
  <div id="app">
    <!-- vue内置组件 -->
    <!-- transition  动态载入效果 -->
    <transition name="router-fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-view">
      <router-view v-if="!$route.meta.keepalive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import './style/common'

// name + enter 进入的那一瞬间
// router-fade-enter -active 会在进入的整个过程里,完全进入后会移除这个类名

.router-fade-enter-active, .router-fade-leave-active{
  transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active{
  opacity: 0;
}
</style>
