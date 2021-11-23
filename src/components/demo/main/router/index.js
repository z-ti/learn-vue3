import { createRouter, createWebHashHistory } from "vue-router";
import { h } from 'vue'
import todos from '../../project/projectexp.vue'
import DashBoard from './dashboard.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'dashboard', component: DashBoard },
        { path: '/todos', name: 'todos', component: todos },
        { path: '/:pathMatch(.*)*', name: 'notFound', component: {
            render() {
                return h('div', '页面走丢了')
            }
        } }
    ],
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition
        }else {
            return {top: 0}
        }
    }
})

// 使用命名导航至404页面
// router.resolve({
//     name: 'notFound',
//     params: {
//         pathMatch: ['not', 'found']
//     }
// }).href

// 添加路由
router.addRoute({
    path: '/about',
    name: 'about',
    component: () => import('./about.vue')
})
// 给某个路由动态添加子路由
router.addRoute('about', {
    path: '/about/info',
    name: 'info',
    component: {
        render() {
            return h('div', 'info page')
        }
    }
})

export {
    router
}