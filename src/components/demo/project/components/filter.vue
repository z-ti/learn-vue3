<template>
    <p class="filters">
        <span 
            v-for="cell in stateList" 
            :key="cell" 
            class="filter"
            @click="changeState(cell)" 
            :class="{selected: visible===cell}"
        >
            {{cell}}
        </span>
    </p>
</template>
<script>

export default {
    props: {
        stateList: {
            type: Array,
            default: []
        },
        visible: {
            type: String,
            default: 'all'
        }
    },
    emits: ['update:visible'],
    setup(props, { emit }) {
        function changeState(cell) {
            emit('update:visible', cell)
        }
        return {
            changeState
        }
    }
}
</script>
<style scoped>
    .filters .selected {
        color: orchid;
    }
    .filter {
        margin-right: 20px;
    }
</style>
