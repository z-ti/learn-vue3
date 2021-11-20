<template>
    <div>
        <input 
            type="text"
            v-model="newTodo"
            @keyup.enter="addTodo"
            autofocus
            placeholder="新增今日待办"
            autocomplete="off"
        />
        <ul>
            <li 
                v-for="(todo, index) in filterTodos" :key="index"
                :class="{completed: todo.completed, editing: todo.id === editId }"
            >
                <div class="view">
                    <input type="checkbox" v-model="todo.completed">
                    <span @dblclick="switchView(todo)">{{todo.name}}</span>
                    <button @click="removeTodo(index)">X</button>
                </div>
                <input 
                    type="text" 
                    v-model="todo.name" 
                    v-todo-focus="todo.id === editId"
                    class="edit"
                    @blur="doneEdit(todo)"
                    @keyup.enter="doneEdit(todo)"
                    @keyup.escape="cancelEdit(todo)"
                />
            </li>
        </ul>
        <p class="filters">
            <span 
                v-for="cell in stateList" 
                :key="cell" 
                class="filter"
                @click="visible=cell" 
                :class="{selected: visible===cell}"
            >
                {{cell}}
            </span>
        </p>
    </div>
</template>
<script>
import {computed, reactive, toRefs, watchEffect} from 'vue'
const todoStorage = {
    fetch() {
        let todos = JSON.parse(localStorage.getItem('todos') || '[]')
        return todos
    },
    save(todos) {
        localStorage.setItem('todos', JSON.stringify(todos))
    }
}
export default {
    setup() {
        const filters = {
            all(todos) {
                return todos
            },
            active(todos) {
                return todos.filter(item => !item.completed)
            },
            completed(todos) {
                return todos.filter(item => item.completed)
            }
        }
        let cacheName = ''
        const state = reactive({
            newTodo: '',
            todos: todoStorage.fetch(),
            editId: -1,
            stateList: ['all', 'active', 'completed'],
            visible: 'all',
            filterTodos: computed(() => {
                return filters[state.visible](state.todos)
            }) 
        })

        let addTodo = () => {
            if(state.newTodo) {
                state.todos.push({
                    id: state.todos.length + 1 ,
                    name: state.newTodo,
                    completed: false
                })
                state.newTodo = ''
            }
            
        }
        function removeTodo(index) {
            state.todos.splice(index, 1)
        }
        function doneEdit(todo) {
           state.editId = -1
           cacheName = ''
        }
        function cancelEdit(todo) {
            todo.name = cacheName
            state.editId = -1
        }
        function switchView(todo) {
            cacheName = todo.name
            state.editId = todo.id
        }
        watchEffect(() => {
            todoStorage.save(state.todos)
        })
        return {
            ...toRefs(state),
            addTodo,
            removeTodo,
            doneEdit,
            cancelEdit,
            switchView
        }
    },
    directives: {
        'todo-focus': (el, {value}) => {
            if(value) {
                el.focus()
            }
        }
    }
}
</script>
<style scoped>
    .completed span{
        text-decoration: line-through;
    }
    .view {
        display: block;
    }
    .editing .view {
        display: none;
    }
    .edit {
        display: none;
    }
    .editing .edit {
        display: block;
    }
    .filters .selected {
        color: red;
    }
    .filter {
        margin-right: 20px;
    }
</style>