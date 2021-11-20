<template>
  <h1>{{ msg }}</h1>
  <!-- <button @click="count++">count is: {{ count }}</button> -->
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <!-- demo组件测试序列 -->
  <!-- <composition/> -->
  <!-- <modal/> -->
  <!-- <emits @click="handleClick"/> -->
  <!-- <renderer/> -->
  <!-- <comp/> -->
  <!-- <vmodel v-model="count" v-model:num="num"/> -->
  <!-- <renderFun v-model:count="count">
    <template v-slot:header>head</template>
    <template v-slot="obj">
      <div>content:{{obj.name}}{{obj.age}}</div>
    </template>
    <template v-slot:footer>foot</template>
  </renderFun> -->
  <!-- 函数式组件 -->
  <!-- <functional level="3">这是一个动态的元素</functional> -->
  <!-- 异步组件 -->
  <!-- <asyncCom></asyncCom> -->
  <!-- <whitelist></whitelist> -->
  <!-- <directiveCom></directiveCom> -->
  <!-- <transitionCom></transitionCom> -->
  <!-- <removedApi></removedApi> -->
  <!-- api实例 -->
  <!-- <todolist></todolist> -->
  <!-- 组件实战 -->
  <projectexp></projectexp>
</template>

<script>
import composition from './demo/compositionapi.vue'
import modal from './demo/teleport.vue'
import emits from './demo/fragmentOrEmits.vue'
import vmodel from './demo/vmodel.vue'
import renderFun from './demo/renderfunction.js'
import functional from './demo/functionalcom.vue'
import { defineAsyncComponent } from 'vue'
// import asyncCom from './demo/asynccomponent.vue'
import whitelist from './demo/whitelist.vue'
import directiveCom from './demo/directive.vue'
import transitionCom from './demo/transition.vue'
import removedApi from './demo/removedApi.vue'
import todolist from './demo/todolist.vue'
import projectexp from './demo/project/projectexp.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    composition, modal, emits, vmodel, renderFun, functional, 
    // asyncCom:  defineAsyncComponent(() =>import('./demo/asynccomponent.vue'))
    asyncCom:  defineAsyncComponent({
      loader: () =>import('./demo/asynccomponent.vue'),
      delay: 2000,
      timeout: 3000,
      // errorComponent: xxx
      // loadingComponent: xxx
    }),
    whitelist,
    directiveCom,
    transitionCom,
    removedApi,
    todolist,
    projectexp
  },
  data() {
    return {
      count: 0,
      num: 11,
    }
  },
  setup() {
    let handleClick = () => {
      console.log('打印我了')
    }
    return {
      handleClick
    }
  }
}
</script>
