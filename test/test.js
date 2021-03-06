var assert = require('assert')
var fns = require('../functions');

console.log(fns.fixed2(3), 666)
console.log(fns.test(789))
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(20)/* 填空题 */)
    })
  })
})

describe('assert', function () {
  it('a和b应当深度相等', function () {
    var a = {
      c: {
        e: 1
      }
    }
    var b = {
      c: {
        e: 1
      }
    }
    // 修改下面代码使得满足测试描述
    assert.deepEqual(a, b)
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      return 100;
    }
    // 修改下面代码使得满足测试描述
    // fn()
    assert.throws(
      () => {
        const otherErr = new Error('Not found');
        otherErr.code = 404;
        throw otherErr;
      },
      Error // This tests for `message`, `name` and `code`.
    );
  })
})
