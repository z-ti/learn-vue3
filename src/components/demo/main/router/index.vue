<template>
    <div>
        <!-- <router-link to="/" class="link">dashboard</router-link> -->
        <navlink  to="/" class="link"></navlink>
        <router-link to="/todos" class="link">todos</router-link>
        <router-link to="/about" class="link">about</router-link>
        <button @click="back">回退</button>
    </div>
    <router-view></router-view>
</template>
<script>
/**
 * 在main.js里添加相关代码
 * 
 * 新特性：
 *  1.添加路由 addRoute
 *  2.composition api里使用路由实例
 * 
 * 变化：
 *  1.router实例创建的变化,createRouter工厂函数来创建，其中routes是必填项
 *  2.history配置的变化： history选项替代了mode，主要的值有：createWebHistory/createWebHashHistory/createMemoryHistory
 *  3.base配置移至到createWebHistory等方法中
 *  4.path * 通配符被移除， 被 '/:pathMatch(.*)*' 这样的方式替代
 *  5.isReady() 替换 onReady() 在服务器渲染的使用时
 *  6.scrollBehavior 里的x,y变成了top,left
 *  7.现在keep-alive和transition必须用在router-view内部
 *    eg: 
 *       <router-view v-slot="{Compenent}">
 *          <keep-alive>
 *              <compenent :is="Compenent"></compenent>
 *          </keep-alive> 
 *       </router-view>
 *  8.router-link移除了一些属性： 
 *      append，
 *      tag/event，
 *          eg: <router-link to="xxx" tag="span" event="dbclick"></router-link> 被移除，替代为
 *             <router-link to="xxx" custom v-slot="{navigate}">
 *                  <span @dbclick="navigate">xxx</span>
 *             </router-link>  
 *      exact: 现在完全匹配逻辑简化了
 *  9.mixins中的路由守卫将被忽略
 *  10.match方法被移除，使用resolve 替代
 *  11.router.getMatchedComponents() 被移除
 *  12.包括首屏导航在内所有导航均为异步
 *    app.use(router);router.isReady().then(() => {app.mount('#app)})
 *    如果首屏存在路由守卫，则可以不等待就直接挂载，产生结果将和vue2相同
 *  13.route的parent属性被移除
 *    parent = this.$route.matched.slice(-2,-1)[0]
 *  14.pathToRegexpOptions 选项被移除
 *  15.使用history.state的情况
 *     之前： history.pushState(xxxState,'',url) 现在：router.push(url), history.replaceState({...history.state, ...xxxState}, '')
 *     之前： history.replaceState({}, '', url) 现在：history.replaceState(history.state, '', url)
 *  16.跳转不存在命名路由报错
 *  17.命名子路由，如果path为空的时候不再追加 / 那么会给设置了重定向redirect选项的子路由带来副作用
 *     eg:  [
 *             {
 *                path: '/dashboard',
 *                children: [
 *                  { path: '', redirect: '/home'}, // 这种情况下找不到/dashboard/home，必须写为redirect: '/dashboard/home'
 *                  { path: 'home', component: Home},   
 *                ]
 *             }
 *          ]
 *  18.$route 属性编码行为
 *     path/fullpath不再做编码
 *     hash 会被编码 
 *     params / 会被解码
 *     query中 + 不处理， 如果想处理就使用stringifyQuery方式
 *     
 */ 
import { onBeforeMount, watch } from 'vue'
import { useRouter, useRoute, onBeforeRouteLeave } from 'vue-router'
import navlink from './navlink.vue'
export default {
    components: {
        navlink
    },
    setup() {
        let router = useRouter()

        let route = useRoute()
        watch(() => route.query, (query) => {
            console.log('query::', query)
        })

        onBeforeRouteLeave((to, from) => {
            debugger
            const ans = window.confirm('你确定离开当前页面吗？')
            if(!ans) {
                return false
            }
        })

        return {
            back() {
                router.back()
            }
        }
    }
}
</script>
<style scoped>
.link {
    margin: 30px;
}
</style>
