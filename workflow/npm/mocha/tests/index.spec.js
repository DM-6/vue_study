// spective  监视
const expect = require('chai').expect
const { add }= require('../index')

describe('hello-npm-script', () =>{    // 测试语法 描述
    // 方方面面都考虑进去
    describe('#add', () => {
        it('should return sum when param are numbers', () => {     //  it()举个例子
            expect(add(0, 1)).to.equal(1);          // .to 
            expect(add(3, 2)).to.equal(5);          // .to 
        }),
        it('当参数不合法时返回NaN', () => {
            expect(isNaN(add(1, '2'))).to.equal(true);
        })
    })
})
// 测试驱动开发