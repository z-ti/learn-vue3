/**
 * vite 是一种开发构建工具
 *   开发中利用浏览器 native ES Moudle 特性导入组织代码，生产中利用rollup作为打包工具
 *   特点是： 光速启动、热模块替换、按需编译
 *
 * vite使用步骤
 *   npm init vite-app xxx
 *   cd xxx
 *   npm install
 *   npm run dev
 *
 * vite 加载原理
 *   在开发环境中，
 *      1.会将import xxx from 'vue'  处理成import xxx from '/@modules/vue.js'，其中/@modules会去node_modules里去找
 *   dist/vue.runtime.esm-bundler.js 这个文件并请求加载（package.json里 "module": "dist/vue.runtime.esm-bundler.js"）
 *      2.import App from '/src/App.vue' 会去请求App.vue文件 生成js文件 __script = {name: 'App', components:{xxx}}
 *   import __render from '/src/App.vue?type=template'; __script.render = __render
 *      3.import './index.css' 会被处理成 import '/src/index.css?import' 其中index.css 会被编译成
 *   import { updateStyle } from "/vite/client"
 *   const css = "#app {\n  font-family: Avenir, Helvetica, xxx"
 *   updateStyle("\"2418ba23\"", css)
 *   export default css
 *
 * css Module
 *   <style module>
 *     .container {}
 *   </style>
 *   在标签上使用：<div :class="$style.container"></div>
 * css 预处理器 安装对应的预处理器就可以直接在vite项目中使用。
 *
 * 资源url处理
 *   <img src="./assets/logo.png" /> 相对路径    <img src="/src/assets/logo.png" /> 绝对路径
 *   样式里 <style> background-image: url('./assets/logo.png') </style>
 *   public 目录下，会被保留并不会hash处理，其目录下的图片引用方式为 <img src="/favicon.ico" />
 *
 * eslint
 *   通过prettier做代码格式化 详见配置
 *
 * jest 详见配置
 * 
 * gitHooks
 *   npm i lint-staged yorkie - D
 *   package.json 里添加：
 *     "gitHooks": {
 *        "pre-commit": "lint-staged",
 *        "pre-push": "npm run test"
 *     },
 *     "lint-staged": {
 *        "*.{js,vue}": "eslint"
 *     }
 *   
 */
