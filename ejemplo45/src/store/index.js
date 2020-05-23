import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 0,
        task: 'Tarea 1',
        completo: false
      },
      {
        id: 1,
        task: 'Tarea 2',
        completo: false
      },
      {
        id: 2,
        task: 'Tarea 3',
        completo: false
      }
    ]
  },
  getters: {
    mostrarTodos: (state)=>{
      return state.todos;
    }
  },
  mutations: {
    agregarTarea: (state,tareaRecibida)=>{
      let idNuevo = Math.floor(Math.random() * 10);
      console.log(idNuevo)
      while (idNuevo){
        let buscar = state.todos.find(todo => todo.id == idNuevo);
        if (buscar == undefined) {
          break;
        }else if (buscar.id == idNuevo) {
          idNuevo++;
          console.log(idNuevo);
        }
      }
      let tarea = {
        id: idNuevo,
        task: tareaRecibida,
        completo: false
      }
      state.todos.unshift(tarea);
    },
    eliminarTarea: (state,id) => {
      let borrar = state.todos.findIndex(todo => todo.id === id)
      state.todos.splice(borrar,1);
    },
    actualizarTarea: (state,id)=> {
      let actualizar = state.todos.find(todo => todo.id === id)
      actualizar.completo = !actualizar.completo;
    }
  },
  actions: {
    agregando: (context,tareaRecibida) => {
      context.commit('agregarTarea',tareaRecibida);
    },
    eliminando: (context,id) => {
      context.commit('eliminarTarea',id);
    },
    actualizando: (context,id) => {
      context.commit('actualizarTarea',id);
    }
  },
});
