<template>
    <input 
            type="text"
            :value="modelValue"
            @input="onInput"
            v-bind="$attrs"
        />
</template>
<script>

export default {
    props: {
        modelValue: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
       function onInput(e) {
           emit('update:modelValue', e.target.value)
       } 
       return {
           onInput
       }
    }
}
</script>
