// 响应式 观察者模式 pub-sub

class Vue {
    constructor(options){
        this._data = options.data;
        observer(this._data)
    }
}

function observer(value){
    // 严格性校验
    if(!value || typeof value !== 'object'){
        return;
    }
    // 数据 _data 里的每个key:value，都需要defineProperty

    Object.keys(value).forEach((key)=>{
        defineReactive(value,key,value[key])
    })
}
function defineReactive(obj,key,val){
    Object.defineProperty(obj,key,{
        enumerable:true, //可便利的
        configurable:true,
        get:function rectiveGetter(){
            return val;
        },
        set:function rectiveSetter(newVal){
            if(val == newVal){
                return;
            }
            val = newVal;
            cb(val)  
        }
    })
}
function cb(val){
    console.log('视图更新了,新的值为'+val)
}
// 发布订阅者模式是vue响应的核心  一对多的关系
let o = new Vue({
    data:{
        test:'I am test',
        name:'zk'
    }
})

o._data.test="hello,test"
o._data.test="hello,test"