function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {     // 返回一个对象
  methods: {
    dispatch(componentName, eventName, params) {   // dispatch 向上传递冒泡事件  $emit只能向上传递自定义事件  指定上级的某个组件，某个事件来执行，并拿到我的参数
      var parent = this.$parent;    // $parent 指向父组件
      // console.log(parent);
      var name = parent.$options.componentName;
      // console.log(name);

      while(parent && (name !== componentName || !name)){
        parent = parent.$parent;
      }
      // console.log(parent);
      if(parent){
        parent.$emit.apply(parent, [eventName].concat(params));    // concat()两个数组的拼接
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
}
