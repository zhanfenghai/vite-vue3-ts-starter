/* eslint-disable no-param-reassign */
/*
 * @Author: zhanfenghai
 * @LastEditTime: 2021-04-23 15:26:58
 * @LastEditors: zhanfenghai
 * @Description:
 * @FilePath: \vite-vue-ts-starter\src\store\index.ts
 */
import { createStore } from 'vuex'

const defaultState = {
  count: 40
}

export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count += 1
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
