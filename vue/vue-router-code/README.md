Vue 用于开发SPA（Single Page Application），路由接管一切

页面 /views 跟 router URL 相匹配

router-link提供链接地址 取代a标签  VueRouter提供的组件  
Vue.use(VueRouter提供的组件)  全局

http://localhost:8080/#/foo    mode:'hash'
http://localhost:8080/foo      mode:'history'

route 前端路由 区分由ngnix apache等配置的后端路由  
前端路由解决的是SPA  
url切换 页面不会刷新  
history API pushState() onPopState() 移除之前的组件，更新新的组件 它的格式和传统的后端URL是一样的  /foo  
缺点： 兼容性  

二、 hash模式  支持IE8  
在URL后面加锚点 IE8以后就不会刷新页面了，同样可以得到事件  
实现同一个页面，不同的页面状态（对应url）