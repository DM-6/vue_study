// class observer{       // 定义observer类
//     constructor(data){
//         this.data = data;
//         this.walk(data);    // 添加walk的data方法
//     }
//     walk(data){     // 定义walk方法
//         Object.keys(data).forEach(key => {
//             this.defineReactive(data, key, data[key]);
//         })
//     }
//     defineReactive(data, key, val){
//         Object.defineProperty(data, key, {
//             enumerable: true,
//             configurable: true,
//             get: function getter(){
//                 return val;
//             },
//             set: function setter(newVal){
//                 val = newVal;
//             }
//         })
//     }
// }

// function observe(value, vm){     // 调用函数
//     if(!value || typeof value !== 'object'){
//         return;
//     }
//     return new observer(value);      // 实例化
// }


class observer {
    constructor(data) {
      this.data = data;
      this.walk(data);
    }
    walk (data) {
      Object.keys(data).forEach(key => {
        this.defineReactive(data, key, data[key])
      })
    }
    defineReactive (data, key, val) {
      Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function getter () {
          return val
        },
        set: function setter (newVal) {
          val = newVal
        }
      })
    }
  }
  function observe(value, vm) {
    if (!value || typeof value !== 'object') {
      return;
    }
    return new observer(value)
  }
  