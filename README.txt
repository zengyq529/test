0基础开始构建nodejs 网站项目
webstorm 环境
npm install 生成package.json
***********阶段1(实现一个简单配置的网站)****************************************
1，配置nodejs
2，用express 实现服务部署
$ cnpm install express --save
$ cnpm install express --save-dev  //用下面的 dev也会写入
安装express模块并写入package.json

***********阶段2 css自适应设计**************************************************
安装 gulp
安装 gulp-px2rem-plugin  //转 rem用的
安装 gulp-minify-css" //压缩用的
执行 gulpfile.js 第一次设置监听
然后执行 gulp px2rem-plugin  就可以转了。
自动转也已经实现了  执行 gulp 就好了。

********阶段3 自己完成vue ssr 项目的搭建***************************************
1, vue ssr 搭建基本开发环境（vue +webpack）
2，加 vue-router , vue-style-loader , gulp px->rem 。       http://localhost:3000/#/index


先不用这个  cnpm install --global vue-cli。

karam 自动化测试
单元测试
生成环境部署
typescript 支持



