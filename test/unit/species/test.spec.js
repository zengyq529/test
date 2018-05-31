/**
 * readme: vue-router  没成功
 *
 */
// https://vue-test-utils.vuejs.org/zh/api/wrapper/ 源
import { shallowMount,createLocalVue } from '@vue/test-utils'
import Test from '../../../src/pages/Test'
import Test1  from '../../../src/pages/forunit/page1'
import {cloneDeep} from 'lodash'
import assert from 'assert'
import Vue from 'vue'
import VueRouter  from 'vue-router'
import Vuex from 'vuex'
import storeConfg from '../../../src/store/forunit'

const localVue = createLocalVue()
localVue.use(Vuex)

/*localVue.use(VueRouter)
const routes = [
    { path: '/test1/:id', component: Test1 }
]
const router = new VueRouter({ routes })*/

describe('Test.vue',()=>{
   // const testVue = shallowMount(Test,{localVue,router})
   // const test1Vue = shallowMount(Test1)

    let actions
    let store
    before(() =>{
    });

    it('what element is text equal', ()=> {
        assert.equal(testVue.find('#findtest').text(),'hello');         //find valid CSS selector��or  compontent
    });
    it('set count', ()=> {
        testVue.setData('count',10)      // setProps 组件
        Vue.nextTick(()=>{
            assert.equal(testVue.find('#count').text(),'10');         //find valid CSS selector��or  compontent
        })
    });
    it('set count', ()=> {
        Vue.nextTick(()=>{
            assert.equal(testVue.find('#count').text(),'10');         //find valid CSS selector��or  compontent
        })
    });
    it('click +1', ()=> {
        testVue.find('button').trigger('click')
        Vue.nextTick(()=>{
            assert.equal(testVue.find('#count').text(),'11');         //find valid CSS selector��or  compontent
        })
    });

   /* it('page test1', ()=> {
        assert.equal(test1Vue.find('#test1').text(),'2');               //find valid CSS selector or  compontent
    });*/

   // vuex
    it('input test',()=>{      //test fail
        const store = new Vuex.Store(cloneDeep(storeConfg))
        const testVue = shallowMount(Test, { store, localVue })
        assert.equal(testVue.find('input').element.value,'newhello')
    })

    

    /*describe('test', () =>{
        before(() =>{
        });
        after(()=> {
        });
        beforeEach(()=> {
        });
        afterEach(()=> {
        });

    });*/

})