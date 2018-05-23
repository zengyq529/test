// app.js
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'

export function createApp () {
    // ���� router �� store ʵ��
    const router = createRouter()
    const store = createStore()

    // ͬ��·��״̬(route state)�� store
    sync(store, router)

    // ����Ӧ�ó���ʵ������ router �� store ע��
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })

    // ��¶ app, router �� store��
    return { app, router, store }
}