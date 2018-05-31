import Vue from 'vue'

Vue.config.productionTip = false // 阻止 vue 在启动时生成生产提示。

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./species', true, /\.Spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/)
srcContext.keys().forEach(srcContext)
