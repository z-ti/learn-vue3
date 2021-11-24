// import vue from '@vitejs/plugin-vue'
const path = require('path')
const { createMockServer } = require('vite-plugin-mock')
// export default { 这个配置失败
//   plugins: [
//     vue({
//       template: {
//         compilerOptions: {
//             delimiters: ['${', '}']  
//         }
//       }
//     })
//   ]
// }

module.exports = {
    alias: {
      "/comps/": path.resolve(__dirname, "src/components")
    },
    proxy: {
      "/api/": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
    plugins: [
      // createMockServer({
      //   supportTs: false // close support .ts file
      // })
    ],
    vueCompilerOptions: {
      delimiters: ['{{', '}}']  // 自定义分隔符
  }
}