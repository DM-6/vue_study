// var o = {};  //空的对象字面量
// o.step = 1;

// var bValue = 1;
// Object.defineProperty(o, 'a', {
//     get: function(){
//         console.log('get');
//         return bValue;
//     },
//     set: function(val){
//         console.log('设置了新的值');
//         bValue = val;
//     }
// });
// o.a = 2;
// console.log(o.a);



// (function(){
//     // 启用严格模式
//     'use strict';
//     // console.log(this);  
//     var o = {};

//     Object.defineProperty(o, 'a', {
//         value: 7,
//         writable: false      //当且仅当该属性的 writable 为 true 时，该属性才能被赋值运算符改变。默认为 false。
//     });

//     console.log(o.a);
//     o.a = 25;
//     console.log(o.a);
// })();



// var o = {};
// Object.defineProperty(o, 'a', {
//     value: 1,
//     enumerable: true      //可枚举   //当且仅当该属性的 enumerable 为 true 时，该属性才能够出现在对象的枚举属性中。默认为 false。
// })

// Object.defineProperty(o, 'b', {
//     value: 2,
//     enumerable: false      //不可枚举
// })

// Object.defineProperty(o, 'c', {
//     value: 3
// })

// o.d = 4;

// console.log(Object.keys(o));

// for(var key in o){
//     console.log(key, o[key]);
// }

// console.log(o.b);
// console.log(o.c);
// console.log(o.propertyIsEnumerable('b'));    //得到该属性是否可枚举



'use strict'   //启用严格模式
var o ={};
Object.defineProperty(o, 'a', {
    configurable: false,  //当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，也能够被删除。默认为 false。
    get: function(){
        return 1;
    }
});
console.log(o.a);
delete o.a;
console.log(o.a);

function Archiver(){
    var template = null;
    var archive = [];

    Object.defineProperty(this, 'temperature', {
        get: function(){
            console.log('get!');
            return temperature;
        },
        set: function(value){
            temperature = value;
        }
    })
    // var data = {
    //     age: 19,
    //     name: '喻顺武',
    // }
    // for(let key in data){
    //     Object.defineProperty(data, key, {
    //         get: function(){
    //             console.log('get!');
    //             return data[key];
    //         },
    //         set: function(newVal){
    //             console.log('set!');

    //         }
    //     })
    // }
    // data.age = 20;
}
var arc = new Archiver();
arc.temperature = 35;
console.log(arc.temperature);
arc.temperature = 38;
console.log(arc.temperature);