<template>
    <div>
        <edit 
            v-model="newTodo"
            @keyup.enter="addTodo"
            autofocus
            placeholder="新增今日待办"
            autocomplete="off"
        />
        
        <ul>
            <todoItem
                v-for="(todo, index) in filterTodos" 
                :todo="todo"
                v-model:editId="editId"
                :key="index"
                @removeTodo="removeTodo(index)"
            >
            </todoItem>
        </ul>
        <filterCom :stateList="stateList" v-model:visible="visible"></filterCom>
    </div>
</template>
<script>
import edit from './components/edit.vue'
import todoItem from './components/todoItem.vue'
import filterCom from './components/filter.vue'
import { useTodos, useFilters } from './utils'
import { reactive, toRefs } from 'vue'

export default {
    components: {
        edit, todoItem, filterCom
    },
    setup() {
        
        const todoState = reactive({
            newTodo: '',
            editId: -1,
        })

        const { todos, addTodo, removeTodo } = useTodos(todoState)

        const filterState = useFilters(todos)
        
        return {
            ...toRefs(todoState),
            ...toRefs(filterState),
            addTodo,
            removeTodo
        }
    }
}
</script>
<style scoped>
    
</style>