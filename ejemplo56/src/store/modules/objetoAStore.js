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