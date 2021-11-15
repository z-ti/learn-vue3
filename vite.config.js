import vue from '@vitejs/plugin-vue'

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
    vueCompilerOptions: {
      delimiters: ['{{', '}}']  // 自定义分隔符
  }
}