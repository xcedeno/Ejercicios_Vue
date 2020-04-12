<template>
  <div class="container-fluid app">
    <h1 v-text="titulo"></h1>
     <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Titulo</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ingrese el titulo" v-model="nota.titulo">
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Texto</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ingrese un texto" v-model="nota.texto">
        </div>
        <button @click.prevent="agregarNota" class="btn btn-primary btn-sm">Agregar</button>
    </form>
    <hr>
    <section class="row">
      <section class="col-12 col-sm-12 col-md-6 col-lg-4 p-2" v-for="(item, index) in notas" :key="index">
        <div class="card">
          <div class="card-header">
            <p>{{item.titulo}}</p><p class="eliminar"><span @click="eliminarNota(index)">x</span></p>
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>{{item.texto}}</p>
              <footer class="blockquote-footer">{{item.fecha}}</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            titulo: "Gestión de Notas",
            nota: {
                titulo: '',
                texto: ''
            },
            notas: [
              {
                titulo: "Ir al Supermercado",
                texto: "Llevar la lista de compras",
                fecha: new Date().toLocaleString()
              }
            ]
        }
    },
    methods: {
      agregarNota(){
        let {titulo,texto} = this.nota;
        this.notas.push({
          titulo: titulo,
          texto: texto,
          fecha: new Date().toLocaleString()
        })
      },
      eliminarNota(index){
        this.notas.splice(index,1);
      }
    },
}
</script>

<style>
  .app {
    background-color: azure;
  }
  .card-header p {
    display: inline-block;
    width: 50%;
  }
  .eliminar {
    font-weight: 800;
    text-align: right;
  }
  .eliminar span {
    border-radius: 50%;
    border: 1px solid black;
    padding: 5px;
    background-color: deepskyblue;
    cursor: pointer;
  }
  .eliminar span:hover{
    background-color: deeppink;
  }
</style>