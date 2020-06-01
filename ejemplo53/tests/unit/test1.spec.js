import { shallowMount } from '@vue/test-utils';
import Vue from 'vue'
import router from '@/router'
import App from '@/App';

describe('App.vue', () => {
    test('Todo bien', () => {
        const wrapper = shallowMount(App)
        expect(wrapper.get('#nav'))
        expect(wrapper.find('div'))
        expect(wrapper.element).toMatchSnapshot()
        expect(wrapper.text()).toMatch(`Home`)
    })
})