import test from 'main/components/test.vue'
import { shallowMount } from '@vue/test-utils'

describe('aaa', () => {
    test('should', () => {
        const wrapper = shallowMount(test, {
            props: {
                msg: 'hello,hhh'
            }
        })
        expect(wrapper.text()).toMatch('hello,hhh')
    })
})