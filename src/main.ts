/* eslint-disable import/extensions */
/*
 * @Author: zhanfenghai
 * @LastEditTime: 2021-04-23 14:50:42
 * @LastEditors: zhanfenghai
 * @Description:
 * @FilePath: \vite-vue-ts-starter\src\main.ts
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'

// eslint-disable-next-line import/no-unresolved
import router from './router/index'
import store from './store/index'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
