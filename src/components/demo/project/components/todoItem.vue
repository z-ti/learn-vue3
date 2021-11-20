<template>
    <li 
        :class="{completed: todo.completed, editing: todo.id === editId }"
    >
        <div class="view">
            <input type="checkbox" v-model="todo.completed">
            <span @dblclick="switchView(todo)">{{todo.name}}</span>
            <button @click="removeTodo">X</button>
        </div>
        <edit 
            class="edit"
            v-model="todo.name"
            v-todo-focus="todo.id === editId"
            @blur="doneEdit(todo)"
            @keyup.enter="doneEdit(todo)"
            @keyup.escape="cancelEdit(todo)"
        />
    </li>
</template>
<script>
import edit from './edit.vue'

export default {
    props: {
        todo: {
            type: Object,
            default: () => {}
        },
        editId: {
            type: [String, Number],
            default: -1
        }
    },
    components: {
        edit
    },
    emits: ['removeTodo', 'update:editId'],
    setup(props, { emit }) {
        let cacheName = ''
        function switchView(todo) {
            cacheName = todo.name
            updateEditId(todo.id)
        }
        function removeTodo() {
            emit('removeTodo')
        }
        function doneEdit(todo) {
           updateEditId(-1)
           cacheName = ''
        }
        function cancelEdit(todo) {
            todo.name = cacheName
            updateEditId(-1)
        }
        function updateEditId(val) {
            emit('update:editId', val)
        }
        return {
            switchView,
            removeTodo,
            doneEdit,
            cancelEdit
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
</style>