export const ob1 = {
    namespaced: true,
    state: {
        conteo: 0
      },
      mutations: {
        contando(state,valor){
          state.conteo += valor;
        }
      },
      actions: {
      },
      getters: {
        getConteo: (state) =>{
          return state.conteo;
        }
      }
}

export const ob3 = {
    namespaced: true,
    state: {
        mensaje: 'Mensaje desde la store objeto 3 en modulo'
    },
    getters: {
        getMensaje: (state) =>{
          return state.mensaje;
        }
    },
    mutations: {
        mensajeMutations(state,valor){
          state.mensaje = valor;
        }
    },
    actions: {
        mensajeActions(context,valor){
            context.commit('mensajeMutations', valor)
        }
    },
    //strict: true // obliga a usar mutaciones para alterar los estados
    strict: process.env.NODE_ENV !== 'production'
}