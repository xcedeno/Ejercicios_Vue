<template>
        <div class="col mb-4">
            <div class="card h-100">
            <img :src="producto.imagen" class="card-img-top" :alt="producto.id">
            <div class="card-body">
                <h5 class="card-title text-center" v-text="producto.titulo"></h5>
                <p class="card-text text-center">{{producto.precio | moneda}} CLP</p>
                <button  class="btn btn-primary form-control" @click="vendido(producto)" :disabled="visible">{{visible ? "Agregado" : "Agregar a Carro"}}</button>
            </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Productos',
    props: {
        producto: {
            type: Object,
            required: true
        },
        elCarro: {
            type: Array,
            required: false
        }
    },
    methods: {
        vendido(productoVendido){
            this.$emit('agregarCarro',productoVendido)
        }
    },
    computed: {
        visible(){
            let valor = this.elCarro.find((produc => produc.id == this.producto.id))
            if (valor) {
                return true
            }
            return false
        }
    },  
}
</script>