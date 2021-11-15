<template>
    白名单
</template>
<script>
// 组件的data选项应该总是声明为函数
/**
 *  白名单指的是：isCustomElement这个配置选项
 *   1.在html里使用直接 app.config.isCustomElement = tag => tag === 'xxx'
 *   2.在vue-cli里使用 vue-loader进行编译，使用其api
 *      {
 *        test: '\.vue$',
 *        use: 'vue-loader',
 *        options: {
 *          compilerOptions: {
 *             isCustomElement: tag => tag === 'xxx'
 *          }
 *        }
 *      }
 *   3.在vite里使用 vite.config.js中配置
 *     module.exports = {
 *       vueCompilerOptions: {
 *          isCustomElement: tag => tag === 'xxx'
 *       }
 *     }
 */ 
// is 属性仅限于用在component标签上， dom内模板解析就不能直接用is 需要用v-is，eg:v-is="'组件名'"

export default {
    data() { // 不能声明为对象
        return {
            test: '1322'
        }
    },
    setup() {
        
    }
}
</script>
