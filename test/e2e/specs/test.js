/**
 *
 * @type {{"default e2e tests": module.exports.default e2e tests}}
 *
 * 由于现在很多网站使用诸如 Angular、Vue 等框架构建，其节点可能为组件动态渲染，所以 Selenium 在执行测试时可能获取的 Dom 树为旧数据从而导致找不到节点，因此您可以执行等待语句确保节点出现后再进行测试。不过可能不是 100% 成功，这也是这套测试系统的短板之一。
 如果您在进行模拟鼠标的测试，您的鼠标指针可能会干扰您的测试，因此建议运行测试后将您的指针移动至屏幕外部，以避免干扰到浏览器测试。
 测试很可能因为页面加载时间问题导致测试失败，不过这也是 E2E 测试的特征所在，您可以修改您的测试逻辑，或致力缩短加载时间。
 *
 */
module.exports = {
    'default e2e tests': function (browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = 'http://m.500.com/openplatform/#/' //只要能访问到的url 就都可以写。 都可以测试的。   先拿彩讯号试试

        browser
            .url( devServer)
            .waitForElementVisible('#app', 1000)
            .pause(1000);    //加载到 #app

        //初始状态
        browser.expect.element('.hd li:nth-child(2)').to.have.attribute('class').which.contains('on');
        //判断当前元素是否在视觉中间
        browser.expect.element('.indexslide:nth-child(2)').to.have.getClientRects.


        //browser.expect.element('.hahaha').to.be.present.before(50);       // present 指当前元素是存在。包括 隐藏的 视觉范围之外的。


    /*
        //点击规则 出 规则弹窗
        browser
            .click('.btn-rule')
            .waitForElementVisible('.popup-rule', 100)
            .pause(1000)

        // 元素选中第几个这个问题一定要解决啊 ！
        browser
            .click('li:nth-child(3)')
            .waitForElementVisible('.versus-item', 100)
            .pause(1000)
*/


        browser.end()
    }
}