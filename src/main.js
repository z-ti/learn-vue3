import { createApp, h } from 'vue'
import App from './App.vue'
import './index.css'

// 自定义渲染器 实现饼图
// import('./components/demo/canvas')

// 引入路由配置
import { router } from './components/demo/main/router/index.js'
import { store } from './components/demo/main/vuex/index.js'
createApp(App)
.use(router)
.use(store)
// .component('comp', { 全局自定义
//     render() {
//         return h('div', '我是自定义组件')
//     }
// })
.directive('highlight', {
    beforeMount(el, binding, vnode) {
        el.style.background = binding.value
    }
})
.mount('#app')


/**
 * vite使用步骤
 * npm init vite-app xxx
 * cd xxx
 * npm install
 * npm run dev
 */