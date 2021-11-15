<template>
  <div>
    <button @click="isVisible = true">弹出一个模态窗</button>
    <teleport to="body">
      <div v-if="isVisible">
        这是一个弹窗
        <button @click="isVisible = false">关闭</button>
      </div>
    </teleport>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
export default {
  setup() {

    // let { isVisible } = toRefs(reactive({
    //   isVisible: false
    // }))
    let isVisible = ref(false)
    return {
      isVisible
    }
  }
}
</script>
