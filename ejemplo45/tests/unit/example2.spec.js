import Vue from 'vue/dist/vue.common';
import TodoAdd from '@/components/TodoAdd.vue';

describe('TodoAdd', () => {
    let mounted

    beforeEach(() => {
        mounted = new Vue(TodoAdd).$mount()
    })
    
    test('test ejemplo mounted', () => {
        //console.log(mounted)
        console.log(mounted.$options.name)
        console.log(mounted._data)
        console.log(mounted._vnode.tag)
        console.log(mounted._isMounted)
        expect(mounted._isMounted).toBeTruthy();
        console.log(mounted._isVue)
        console.log(mounted.$options.data())
        console.log(mounted.$options.methods)
        console.log(mounted.$el.querySelector('button'))
    })
})
