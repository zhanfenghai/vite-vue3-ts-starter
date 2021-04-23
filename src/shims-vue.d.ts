/*
 * @Author: zhanfenghai
 * @LastEditTime: 2021-04-23 14:39:32
 * @LastEditors: zhanfenghai
 * @Description:
 * @FilePath: \vite-vue-ts-starter\src\shims-vue.d.ts
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}
