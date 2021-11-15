<template>
    <div v-highlight="'red'">自定义指令</div>
</template>
<script>
/**
 * 自定义指令修改：
 *  自定义指令api和组件保持一致，具体表现为：
 *   1.bind => beforeMount
 *   2.inserted => mounted
 *   3.beforeUpdate => 新加的；元素自身更新前调用
 *   4.update => 删除的；因为和updated相似，所以被移除，都用updated替代
 *   5.componentUpdated => updated
 *   6.beforeUnmount => 新加的；元素将要被移除之前调用
 */
export default {
    setup() {
        
    }
}
</script>
