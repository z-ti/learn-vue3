import { ref, watchEffect, computed, reactive } from 'vue'

const todoStorage = {
    fetch() {
        let todos = JSON.parse(localStorage.getItem('todos') || '[]')
        return todos
    },
    save(todos) {
        localStorage.setItem('todos', JSON.stringify(todos))
    }
}

export function useTodos(state) {
    const todos = ref(todoStorage.fetch())

    let addTodo = () => {
        if(state.newTodo) {
            todos.value.push({
                id: todos.value.length + 1 ,
                name: state.newTodo,
                completed: false
            })
            state.newTodo = ''
        }
        
    }

    function removeTodo(index) {
        todos.value.splice(index, 1)
    }

    watchEffect(() => {
        todoStorage.save(todos.value)
    })

    return {
        todos, addTodo, removeTodo
    }
}

export function useFilters(todos) {
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
    let filterState = reactive({
        stateList: ['all', 'active', 'completed'],
        visible: 'all',
        filterTodos: computed(() => {
            return filters[filterState.visible](todos.value)
        }) 
    })
    return filterState
}