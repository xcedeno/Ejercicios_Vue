<template>
  <div class="container">
      <header>
        <h1 v-text="titulo.toLocaleUpperCase()"></h1>
        <button v-if="botones == 'defecto'" class="btn btn-primary" @click.prevent="cambiarEstado('editar')">Agregar</button>
        <button v-else class="btn btn-danger" @click.prevent="cambiarEstado('defecto')">Cancelar</button>
      </header>
      <br>
      <section v-if="botones == 'editar'">
        <p>Agregar utiles</p>
        <input type="text" placeholder="Agrega uno nuevo aqui" v-model="nuevoUtiles" @keypress.enter="agregar">
        <button class="btn btn-primary" @click.prevent="agregar" :disabled="nuevoUtiles.length <= 5">Guardar</button>
        <p>{{conteoCaracteres}}/200</p>
        <ul>
          <li :class="{seCompro: item.comprado}" v-for="(item, index) in ordenReverso" :key="index" @click.stop="liberar(item)">{{item.util}} <button @click.stop="comprando(item)" :disabled="item.comprado" class="btn btn-primary btn-sm">Comprar</button></li>
        </ul>
      </section>
      <br>
      <p v-show="utiles.length == 0">No existen elementos en la lista de utiles</p>
  </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            titulo: "Listado de utiles",
            utiles: [
                {util:"Lapices", comprado:true},
                {util:"Borradores", comprado:false},
                {util:"Cuadernos Cuadriculados", comprado:true},
                {util:"Cuadernos de Caligrafia", comprado:false},
            ],
            nuevoUtiles: '',
            botones: 'defecto'
        }
    },
    methods: {
        agregar(){
            if (!this.nuevoUtiles == '') {
                this.utiles.push(
                    {
                        util:this.nuevoUtiles,
                        comprado:false
                    }
                );
                this.nuevoUtiles = '';
            } else {
                alert("Debe ingresar un valor correcto")
            }
        },
        cambiarEstado(nuevoCambio){
            this.botones = nuevoCambio;
        },
        comprando(item){
            this.utiles.map((producto)=>{
                if (producto.util == item.util && producto.comprado == false) {
                    producto.comprado = true;
                };
            })
        },
        liberar(item2){
            if (item2.comprado) {
                item2.comprado = !item2.comprado;
            }
        }
    },
    computed: {
        conteoCaracteres(){
            return this.nuevoUtiles.length;
        },
        ordenReverso(){
            return this.utiles.slice(0).reverse();
        }
    },
}
</script>

<style>
    div {
        background-color: azure;
        font-size: 18px;
    }
    .seCompro{
        text-decoration: line-through;
        color: brown;
    }

</style>