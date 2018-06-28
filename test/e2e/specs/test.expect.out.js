module.exports = {
    'first test':browser=>{
        const devServer = 'http://localhost/flex'
        browser.url( devServer)
            .pause(1000)

        browser.expect.element('#mod')/*.to*/.text.equal('flex');

        browser.expect.element('#app').text./*to.*/contain('flex').after(1000);  //多少秒后尝试重新测试

        browser.expect.element('#mod')/*.to.be*/.a('div')

        browser.expect.element('#mod')/*.to.have*/.attribute('data-attr').equals('hah')

        browser.expect.element('#nonetest')/*.to.be*/.enabled; //.present（在dom上） 只是表示元素存在 跟可见没有关系

        browser.expect.element('#nonetest')/*.to.be*/.visible;//可见的。

        browser.end()
    }
};

/*
* 测试失败 下面一条 也不会再进行
*
* */
