<template>
    <div>
        <ul>
            <li v-for="c in courses" :key="c.id">{{c.name}}</li>
        </ul>
    </div>
</template>
<script lang="ts">
/**
 * typescript 
 *  vite中可直接导入ts文件，在sfc中通过 <script lang="ts">&/script> 使用
 * 
 * ts版本指定， package.json
 * {
 *    "devDependencies": {
 *      "typescript": "^3.9.7"
 *    }
 * }
 * 
 * ts参考配置，tsconfig.json
 * {
 *    "compilerOptions": {
 *      "target": "esnext",
 *      "module": "esnext",
 *      "moduleResolution": "node",
 *      "isolateModules": true,
 *      "strict": true,
 *      "noUnusedLocals": true,
 *      "noUnusedParameters": true,
 *      "experimentalDecorators": true,
 *      "lib": ["dom", "esnext"]
 *    },
 *    "exclude": ["node_modules", "dist"]
 * }
 */
import { defineComponent, ref } from 'vue'

interface Course {
    id: number;
    name: String;
}
export default defineComponent({
    setup() {
      const courses = ref<Course[]>([])
      setTimeout(() => {
          courses.value.push({
              id: 1,
              name: '语文'
          })
      }, 1000)
      return {
          courses
      }
    }
})
</script>