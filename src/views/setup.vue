<!--
 * @Author: zhanfenghai
 * @LastEditTime: 2021-04-23 16:43:31
 * @LastEditors: zhanfenghai
 * @Description:
 * @FilePath: \vite-vue-ts-starter\src\views\setup.vue
-->
<template>
  <div>setup {{ age }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// eslint-disable-next-line no-unused-vars
const age = ref(0)
</script>
