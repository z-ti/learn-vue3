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
 * 项目配置 见 vite.config.js
 *   
 * 数据mock
 *  npm i mockjs -S
 *  npm i vite-plugin-mock cross-env -D
 *  在vite.config.js 配置 plugins
 *  创建mock文件，并写入mock数据
 *  修改package.json "dev": "cross-env NODE_ENV=development vite",
 *   
 * 打包部署
 *  使用 npm run build 执行打包 生成dist目录
 *  传统方式 通过scp，ssh的方式将dist 上传到服务器，再配置好nginx
 *  利用github actions实现CI/CD过程
 *    流程：
 *      开发机 ->  push -> github(checkout & build) -> 虚拟机 -> upload -> 阿里云服务器
 *    准备：
 *      阿里云linux服务器（linux操作/阿里云相关操作等）
 *    第一步：
 *      配置workflow，在项目根目录下创建 .github/workflows/publish.yml
 *    第二步：
 *      在github当前项目下设置私钥选项 Secrets -> New repository secrets
 *      复制本地私钥， ～/.ssh/id_rsa 放入github输入信息里
 *    第三步：
 *      在阿里云服务器配置nginx
 *      登陆服务器 ssh root@47.98.252.43 # IP 换成自己的
 *      配置nginx cd /etc/nginx/sites-enabled/   vi vue-in-action
 *      添加如下配置 
 *         server {
 *            listen 8080;
 *            server_name 47.98.252.43;
 *            location / {
 *              root /root/vue-in-action/dist/;
 *              index index.html index.htm;
 *            }
 *         }
 *      重启nginx   nginx -s reload
 *    第四步：
 *      push 代码，触发workflow
 */
