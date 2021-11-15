<template>
  <h2>{{msg}}</h2>
  <p>{{counter}}</p>
  <p>{{doubleC}}</p>
  <span ref="span"></span>
</template>

<script>
import { reactive, computed, onMounted, onUnmounted, ref, toRefs, watch } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    let { counter, doubleC } = useCounter()
    let msg = ref('hello')
    let span = ref(null)
    watch(counter, (val, oldVal) => {
      span.value.textContent = `值从${oldVal}到${val}`
    })
    return { counter, doubleC, msg, span }
  }
}
function useCounter() {
  let state = reactive({
    counter: 1,
    doubleC: computed(() => state.counter * 2)
  })

  let timer

  onMounted(() => {
    timer = setInterval(() => {
    state.counter++
    }, 1000)
  })
  
  onUnmounted(() => {
    clearInterval(timer)
  })
  return toRefs(state)
}
</script>
