
import { h } from 'vue'
export default {
    props: {
        count: {
            type: Number,
            default: 0
        }
    },
    render() {

        return h('div', [
            this.$slots.header(),
            h(
                'div',
                {
                    onClick: () => {
                        this.$emit('update:count', this.count + 1)
                    }
                },
                'I is render function' + this.count
            ),
            this.$slots.default({name:'张三',age:16}),
            this.$slots.footer()
        ])
    }
 }
