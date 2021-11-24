<template>
    vuex 
    <!-- {{$store.state.count}} -->
    <!-- <button @click="$store.commit('add')">+</button> -->
    <!-- {{state.count}} -->
    {{count}}
    <button @click="add">+</button>
    <button @click="fetchApi">调接口</button>
</template>
<script>
import { toRefs } from '@vue/reactivity'
import { useStore } from "vuex"
export default {
    setup() {
        const store = useStore()
        return {
            // state: store.state,
            ...toRefs(store.state),
            add() {
                store.commit('add')
            },
            fetchApi() {
                store.dispatch('fetchApi')
            }
        }
    }
}
</script>
