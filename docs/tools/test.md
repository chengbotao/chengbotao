**Q: 什么是单元测试**  
**A:** 对软件中的 **最小可测试单元(一个方法/API)** 进行测试

---

**Q: 为什么要用单元测试**  
:::tip 原因总结如下:
1. 分模块开发,方便定位到那个单元出了问题
2. 有效的提高代码质量
3. 驱动开发(测试驱动开发)
:::

**Q: 单元测试的两种类型**  
:::tip TDD&BDD
1. TDD
   > 测试驱动开发,从需求角度看,即我需要结果是什么,如果不是就是错误的  
   > 需求分析->编写单元测试->编写代码使单元测试通过->重构
2. BDD
   > 行为驱动开发,从具体功能角度看,即结果应该是什么,如果不是什么就是错误的  
   > 从业务角度定义目标->找到实现目标的方法->编写单元测试->实现行为->检查产品
:::

**Q: 测试原则**  
:::tip 原则:
1. 及时修改和维护
2. **Code review**(代码审查)
   > 瞬时的代码审查  
   > 同步的代码审查  
   > 异步代码审查  
   > 偶尔的代码审查
3. 只测试单一的点
4. 尽量贴近真实
5. 避免测试中逻辑过于复杂
:::

**Q: 单元测试的核心内容**  
:::tip 核心内容

1. 测试框架
   > Jest --- 基于 jasmine, 对 React 友好  
   > Jasmine --- BDD 风格, 自带 assert 和 mock  
   > Mocha --- 全面适合 node 和浏览器两个运行端  
   > Qunit --- 出自 jQuery, 后来独立出来
2. 断言库
   > Chai --- 支持所有风格(全面)  
   > Should  
   > Expect  
   > Assert --- node 环境直接使用
3. Mock 库
   > sinon
4. Test runner
   > karma
5. 覆盖率工具
   > istanbul
:::

**Q: 单元测试的基本语法/测试用例规则**  
```js
// e.g.
function a(a, b) {
  return a + b;
}

// descript --- 对于某一个项目的功能整体的测试
descript("对于功能的描述", () => {
  // 钩子方法
  before(() => {
    // 在所有测试用例调用前调用
  });
  after(() => {
    // 在所有测试用例执行结束调用
  });
  beforeEach(() => {
    // 每个测试用例调用前调用
  });
  afterEach(() => {
    // 每个测试用例例执行结束调用
  });

  // it.only() // 只执行only的测试用例,其他的测试用例不会执行

  // 具体的测试用例
  it("对于某个方法的描述", () => {
    // 调用断言库
    expect(a(1, 1)).to.equal(2);
  });

  it("对于接口的测试模板", () => {
    // 需要在测试用例的代码中引入
    // import Promise from "es6-promise";
    // Promise.polyfill()

    // spy、stub、Mock
    // spy: 不会阻止方法的运行, 获取方法信息的, 比如：方法调用几次: axiosSpy.callCount
    // stub: 会拦截到方法的调用
    // Mock: spy + stub
    const axiosSpy = sinon.spy("axios", "get");
    // sinon 使用结束之后需要 restore
    axiosSpy.restore();
    // const axiosStub = sinon.stub("axios", "get");
    // axiosStub.restore();
  });
});
```
