import { shallowMount } from '@vue/test-utils';
import TodoAdd from '@/components/TodoAdd.vue';
import App from '@/App.vue'
//import TodoList from '@/components/TodoList';
import store from '@/store';
import Vuex from 'vuex';

describe('store Vuex', () => {
  beforeAll(()=>{
    Vue.use(Vuex)
    store = new Vuex.Store(store)
  })
})

describe('action', ()=> {
  it('prueba action', () => {
   store.dispatch('agregando','tarea ejemplo 1')
   expect(store.state.todos.length).toBe(4)
  })
})

describe('getters',()=>{
  it('prueba getters', () => {
    let todos = store.getters.mostrarTodos;
    expect(todos.length).toBe(4);
  })
})

describe('TodoAdd.vue', ()=> {
  it('prueba test 1', () => {
    const wrapper = shallowMount(TodoAdd);
    const dataTodoAdd = TodoAdd.data();
    expect(dataTodoAdd.tarea).toEqual('');
    let entrada = wrapper.find('.ToDo-input');
    expect(entrada.element.placeholder).toBe('Agrega una tarea');
  })
  
  it('prueba boton', () => {
    const wrapper = shallowMount(TodoAdd);
    expect(wrapper.find('button').text()).toEqual('Agregar');
    //console.log(wrapper.vm.$data.tarea);
    let variable = wrapper.vm.$data.tarea;
    variable = '';
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.$data.tarea).toBe('');
    wrapper.vm.addTodo = jest.fn();
    wrapper.vm.addTodo();
    expect(wrapper.vm.addTodo.mock.calls.length).toBe(1);
  })
})

describe('App.vue', ()=> {
  it('prueba test 2', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find('.ToDo-title').element.textContent).toBe('Lista de tareas con Vuex');
    expect(wrapper.find('.ToDo-title').text().length).toBe(24);
    expect(wrapper.element).toMatchSnapshot();
  })
})

/* describe('TodoList', () => {
  test('prueba test 4',()=>{
    const wrapper = shallowMount(TodoList);
    let todos = store.getters.mostrarTodos;
    expect(todos).toBe(todos)
    expect(wrapper.html()).toContain('<ul class="ToDo-tasks">')
  })
}) */
