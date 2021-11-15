<template>
    <p>1</p>
    <p ref="target">2</p>
    <div @click="$emit('click')">
        自定义事件
    </div>
</template>
<script>
// fragments vue3支持template里直接有多个标签的情况

/**
 * emits component option
 *   vue3中组件发送自定义事件需要定义emits选项中：
 *     原生事件会触发两次，比如click
 *     更好的指示组件工作方式
 *     对象形式事件校验
 */
import { nextTick, ref } from 'vue'
export default {
    emits: ['click'],
    setup() {
      let target = ref(null)
      nextTick(() => {
          console.log(1234,target.value)
      })
      return {
          target
      }
    }
}
</script>
