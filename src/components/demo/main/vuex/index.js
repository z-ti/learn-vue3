import { createStore } from "vuex"
const store = createStore({
    state() {
        return {
            count: 1
        }
    },
    mutations: {
        add(state) {
            state.count ++ 
        }
    },
    actions: {
        fetchApi({commit}, data) {
            console.log('配置信息', import.meta.env.VITE_TOKEN)
            fetch('/api/users').then(res => res.json()).then(res => {
                console.log('请求结果', res)
            })
        }
    }
})

export {
    store
}