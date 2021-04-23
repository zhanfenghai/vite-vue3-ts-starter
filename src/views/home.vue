<!--
 * @Author: zhanfenghai
 * @LastEditTime: 2021-04-23 14:38:02
 * @LastEditors: zhanfenghai
 * @Description:
 * @FilePath: \vite-vue-ts-starter\src\views\home.vue
-->
<template>
  <div @click="updateAge">{{ age }}{{ count }}</div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore, mapState } from 'vuex'

export default defineComponent({
  computed: {
    ...mapState({
      count: (state: any) => state.count
    })
  },
  setup() {
    const store = useStore()
    const age = computed(() => store.state.count)

    const updateAge = () => {
      // console.log('dis')
      store.dispatch('increment')
    }
    return {
      age,
      updateAge
    }
  }
})
</script>
