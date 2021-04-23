/*
 * @Author: zhanfenghai
 * @LastEditTime: 2021-04-23 15:21:22
 * @LastEditors: zhanfenghai
 * @Description:
 * @FilePath: \vite-vue-ts-starter\tests\Test.spec.ts
 */
import { mount } from '@vue/test-utils'
import Test from '../src/views/Test.vue'

test('Test.vue', async () => {
  const wrapper = mount(Test)
  expect(wrapper.html()).toContain('Unit Test Page')
  expect(wrapper.html()).toContain('count is: 0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('count is: 1')
})
