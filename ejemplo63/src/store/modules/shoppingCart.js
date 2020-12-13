import { Notification } from 'element-ui';

export const namespaced = true;

export const state = {
    cartItems: [],
    cartStatus: 0,
}

export const getters = {
    enviandoCartItems(state){
        return state.cartItems;
    },
    enviandoCartStatus(state){
        return state.cartStatus;
    },
    totalCartItems(state,getters){
        return getters.enviandoCartItems.length;
    },
    enviandoTotal(state,getters){
        let total = 0, subtotal = 0;
        getters.enviandoCartItems.forEach(item => {
          let precio = item.prices.clp;
          subtotal += precio;
          total += (precio + precio*0.1);
        });
        return {
          total,
          subtotal
        }
    }
}

export const mutations = {
    mutandoCartItem(state,item){
        state.cartItems.push(item)
    },
    removeItemById(state,id){
        let encontrado = state.cartItems.findIndex(result => result.id == id);
        state.cartItems.splice(encontrado,1);
        // otra menera de tantas
        //state.cartItems = state.cartItems.filter(result => result.id !== id)
    },
    deleteCart(state){
      state.cartItems = [];
    }
}

export const actions = {
    addItem({commit,state, dispatch}, item){
        let buscarItem = state.cartItems.find(result => result.id == item.id);
        if(!buscarItem){
          commit('mutandoCartItem',item);
          Notification.success({
            title: 'Success',
            message: 'Se agregó correctamente',
            type: 'success'
          });
        } else {
/*           Notification.error({
            title: 'Success',
            message: 'No se puede agregar',
            type: 'success'
          }); */
          const alert = {
            show: true,
            variant: 'danger',
            message: "Ya se encuentra agregado al carro"
          };
          dispatch('addAlert',alert,{root: true});
          console.log("error");
        }
    },
    itemToTrash({commit,dispatch},id){
        commit('removeItemById',id);
        const alert = {
          show: true,
          variant: 'danger',
          message: "Eliminaste un elemento del carro"
        };
        dispatch('addAlert',alert,{root: true});
    },
    deleteAll({commit}){
      commit('deleteCart');
    }
}