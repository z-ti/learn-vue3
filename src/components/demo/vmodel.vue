<template>
    <div @click="$emit('update:modelValue', 'newVal');$emit('update:num', num+1);">
        i am a  {{modelValue}} ::{{num}}
    </div>
</template>
<script>
// 移除sync
export default {
    props: ['modelValue', 'num'],
    setup() {
        
    },
}
</script>
