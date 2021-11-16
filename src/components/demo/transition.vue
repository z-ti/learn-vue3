<template>
    <button @click="show = !show">点击</button>
    <transition name="fade">
        <p v-show="show">hello world</p>
    </transition>
</template>
<script>
/**
 * transition变化：
 *   v-enter => v-enter-from   v-leave => v-leave-from
 * 
 * watch变化：
 *   this.$watch(()=> this.obj.xxx, (v1, v2) => {
 *      console.log('新值', v1)
 *   })
 */
import { reactive, toRefs, ref } from 'vue'
export default {
    setup() {
        // const { show } = toRefs(reactive({
        //     show: false
        // }))
        return {
            show: ref(false)
            // show
        }
    }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>