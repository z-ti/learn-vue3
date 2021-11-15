<template>
    <piechart
        @click="handleClick"
        :data="state.data"
        :x="200"
        :y="200"
        :r="200"
    />
</template>
<script>
import { reactive, ref } from 'vue'
export default {
    setup() {
        let state = reactive({
            data: [
                { name: '大专',  count: 200, color: 'green'},
                { name: '本科',  count: 100, color: 'red'},
                { name: '硕士',  count: 400, color: 'blue'},
                { name: '博士',  count: 300, color: 'pink'}
            ]
        })
        let handleClick = () => {
            state.data.push({
                name: '其他',
                count: 50,
                color: 'brown'
            })
        }
        return {
            title: ref('hh1h'),
            state,
            handleClick
        }
    }
}
</script>
