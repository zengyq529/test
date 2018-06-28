/**
 *
 * @type {{"default e2e tests": module.exports.default e2e tests}}
 *
 * 由于现在很多网站使用诸如 Angular、Vue 等框架构建，其节点可能为组件动态渲染，所以 Selenium 在执行测试时可能获取的 Dom 树为旧数据从而导致找不到节点，因此您可以执行等待语句确保节点出现后再进行测试。不过可能不是 100% 成功，这也是这套测试系统的短板之一。
 如果您在进行模拟鼠标的测试，您的鼠标指针可能会干扰您的测试，因此建议运行测试后将您的指针移动至屏幕外部，以避免干扰到浏览器测试。
 测试很可能因为页面加载时间问题导致测试失败，不过这也是 E2E 测试的特征所在，您可以修改您的测试逻辑，或致力缩短加载时间。
 *    :nth-child(2)  //列表中选择第二个
 *
 *    参考链接
 *    https://www.cnblogs.com/NadiaSmile/p/6688778.html
 *    https://github.com/yyx990803/nightwatch-helpers
 *    assert 出现错误后 不继续测试
 */

module.exports = {
    before : browser=> {
        console.log('Setting up...');
    },

    after : function(browser) {
        console.log('Closing down...');
    },

    beforeEach : function(browser) {

    },

    afterEach : function() {

    },
    'first test': function (browser) {
        const devServer = 'http://m.500.com/openplatform/#/' //只要能访问到的url 就都可以写。 都可以测试的。   先拿彩讯号试试
        browser
            .url( devServer)
            .waitForElementVisible('#app', 1000)
            .pause(1000)

        browser.assert.count('.rank-item',3) //nightwatch-helper 插件   某个元素的个数
            .assert.count('.rank-item li',9)
            .assert.containsText('.item-top li:nth-child(1) .name','老漢')  //榜单显示正确
            .assert.containsText('.item-top li:nth-child(1) .info','100%')
            .assert.count('.newest-list li',10) //数目
            //.assert.notVisible('.indexslide:nth-child(1)')  // not ok 对于 滑动这种css样式不敏感
            .assert.notVisible('.l-full') // ok*/

        browser.assert.containsText('.team-name','意大利')
            .click('.hot-compet .more-zj')
            .waitFor(1000)
            .assert.containsText('.team-name','塞尔维')
            .click('.hot-compet .more-zj')
            .waitFor(1000)
            .assert.containsText('.team-name','巴拉纳')
            .assert.count('.news-list li',10)
            .waitFor(1000)


        browser.click('.rank-item:nth-child(1) .btn-all')
            .waitFor(3000)
            .assert.cssClassPresent('.hd li:nth-child(2)','on')             //验证class
            .waitFor(1000)


        browser.setValue('.indexslide:nth-child(2) input', ['不一样的大神',browser.Keys.ENTER]) // browser.submitForm('form.login');也可以测试。 有form没有提交按钮的情况
            .waitFor(1000)
            .assert.count('.news-list li',9) //会找到所以news-kust 的所有 li。


        //提交form表单
        browser.pause(5000);
        browser.end()
    },

 /*   'second test': function (browser){
        const devServer = 'http://m.500.com/openplatform/#/search' //只要能访问到的url 就都可以写。 都可以测试的。   先拿彩讯号试试
        browser
            .url( devServer)
            .waitForElementVisible('#app', 1000)
            .pause(1000);    //加载到 #app
    }*/

}


/*
nightwatch 官方介绍
http://nightwatchjs.org/api/#assertions
功能总结：
1 click 元素必须可见并且在 可视范围内 click才有效
2 notVisible 对 css设置不敏感 css 设置到可视范围外  验证还是 false的
3 针对我们的页面有很多 滑动效果的 （使用slider插件的） 可以给当前显示元素添加class on 。 用来验证测试用例是否执行成功。
4 没法模拟touch 效果
5 页面窗口无法定义
6 assert 出现错误后 不继续测试（直接抛出错误 退出）
7 测试表单 效果会好一些。
8 对于动态效果比较多的移动端页面或者pc页面效果并不好 但是可以测试内容是否合规
9 nth-child(2) 并列元素才好使的
10 ['不一样的大神',browser.Keys.ENTER] //有form没有提交按钮的情况
11 写多个function 用 asset 也一样会终止。跳出。
 */

