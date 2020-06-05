import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [{
      "id": 1,
      "name": "Konklab",
      "description": "Contus/lac/hem brainstem w LOC of 1-5 hrs 59 min, sequela",
      "image": "http://dummyimage.com/151x178.png/cc0000/ffffff",
      "completed": true
    }, {
      "id": 2,
      "name": "Home Ing",
      "description": "Corrosion of first deg mult sites of unsp ank/ft, init",
      "image": "http://dummyimage.com/146x237.png/dddddd/000000",
      "completed": true
    }, {
      "id": 3,
      "name": "Zathin",
      "description": "Paralytic calcifcn and ossifictn of muscle, multiple sites",
      "image": "http://dummyimage.com/107x156.jpg/dddddd/000000",
      "completed": false
    }, {
      "id": 4,
      "name": "Toughjoyfax",
      "description": "Bent bone of l ulna, 7thJ",
      "image": "http://dummyimage.com/115x140.png/dddddd/000000",
      "completed": false
    }, {
      "id": 5,
      "name": "Otcom",
      "description": "Secondary malignant neoplasm of right adrenal gland",
      "image": "http://dummyimage.com/144x160.jpg/dddddd/000000",
      "completed": false
    }, {
      "id": 6,
      "name": "Viva",
      "description": "Adverse effect of iminostilbenes, subsequent encounter",
      "image": "http://dummyimage.com/149x190.bmp/dddddd/000000",
      "completed": false
    }, {
      "id": 7,
      "name": "Lotstring",
      "description": "Other specified disorders of temporomandibular joint",
      "image": "http://dummyimage.com/238x101.png/dddddd/000000",
      "completed": true
    }, {
      "id": 8,
      "name": "Job",
      "description": "Corrosion of third degree of back of right hand, sequela",
      "image": "http://dummyimage.com/163x194.png/cc0000/ffffff",
      "completed": false
    }, {
      "id": 9,
      "name": "Zontrax",
      "description": "Corrosion of second degree of hand, unspecified site",
      "image": "http://dummyimage.com/209x205.jpg/ff4444/ffffff",
      "completed": true
    }, {
      "id": 10,
      "name": "Zaam-Dox",
      "description": "Low lying placenta with hemorrhage, third trimester",
      "image": "http://dummyimage.com/127x213.png/cc0000/ffffff",
      "completed": true
    }],
    filtros: {
      busqueda: '',
      terminado: true
    }
  },
  getters: {
      mostrarCursos(state){
        return state.cursos;
      },
      filtraCurso(state){
        if (state.filtros.busqueda){
          let curso = state.cursos.filter(datos => datos.completed === state.filtros.terminado)
          return curso.filter(result => result.name.toLowerCase().includes(state.filtros.busqueda))
        }
        return state.cursos;
      }
  },
  mutations: {
    cambiando_busqueda (state,recibidoBusqueda) {
      state.filtros.busqueda = recibidoBusqueda;
    },
    cambiando_terminado (state) {
      state.filtros.terminado = !state.filtros.terminado;
    }
  },
  actions: {
    cambiarBusqueda(context,terminoBuscar){
      context.commit('cambiando_busqueda',terminoBuscar);
    },
    cambiarTermino(context){
      context.commit('cambiando_terminado');
    }
  },
})
