
<script>
import { h } from 'vue'
// 只需要实现一个函数
// sfc 中<template>不能添加functional 特性声明函数是组件
// { functional: true } 组件选项移除
function Heading(props, context) {
    return h(`h${props.level}`, context.attrs, context.slots)
}

Heading.props = ['level']
export default Heading
</script>
