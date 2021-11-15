import { createApp, h } from 'vue'
import App from './App.vue'
import './index.css'
// 自定义渲染器 实现饼图
// import('./components/demo/canvas')

createApp(App)
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