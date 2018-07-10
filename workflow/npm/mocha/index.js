const add = (a, b) => {            // 函数表达式
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }
    return NaN;
};

// 使用common js 向外输出
// console.log(add(1, '2'))            // 测试用例
module.exports = { add };
