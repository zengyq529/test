module.exports = {
    'first test':browser=>{
        const devServer = 'http://m.500.com/openplatform/'
        browser.resizeWindow(375, 667) //
           // .setWindowPosition(3000, 0)
            .url( devServer)
            .pause(4000)

/*        browser.expect.element('#mod')/!*.to*!/.text.equal('flex');

        browser.expect.element('#app').text./!*to.*!/contain('flex').after(1000);  //多少秒后尝试重新测试

        browser.expect.element('#mod')/!*.to.be*!/.a('div')

        browser.expect.element('#mod')/!*.to.have*!/.attribute('data-attr').equals('hah')

        browser.expect.element('#nonetest')/!*.to.be*!/.enabled; //.present（在dom上） 只是表示元素存在 跟可见没有关系

        browser.expect.element('#nonetest')/!*.to.be*!/.visible;//可见的。*/

        browser.end()
    }
};

/*
* 先默认的 再重置
*
* */



