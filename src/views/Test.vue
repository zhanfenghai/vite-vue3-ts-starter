<!--
 * @Author: zhanfenghai
 * @LastEditTime: 2021-04-23 15:31:44
 * @LastEditors: zhanfenghai
 * @Description:
 * @FilePath: \vite-vue-ts-starter\src\views\test.vue
-->
<template>
  <div class="test-container page-container">
    <div class="page-title">Unit Test Page</div>
    <p>count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Test',
  setup() {
    const count = ref<number>(0)
    const increment = () => {
      count.value += 1
    }
    return { count, increment }
  }
})
</script>
