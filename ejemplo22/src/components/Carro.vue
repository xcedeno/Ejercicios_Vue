<template>
    <div class="list-group col-12">
        <a class="list-group-item list-group-item-action" v-for="(item, index) in productosVendidos" :key="index">
            {{item.titulo}} - {{item.precio | moneda}} - <button type="button" class="btn btn-danger" @click="eliminarItem(item)">Eliminar</button>
        </a>
        <div class="list-group-item list-group-item-action my-2 py-2">
            <p>Total: {{total | moneda}}</p>
        </div>
        <button :disabled="productosVendidos.length <= 0" class="btn btn-info" @click.prevent="$emit('pagar')">Pagar Ahora</button>
    </div>
</template>

<script>
export default {
    name: 'Carro',
    props: {
        productosVendidos: {
            type: Array,
            required: true
        }
    },
    methods: {
        eliminarItem(productoEliminar){
            this.$emit("eliminarProducto",productoEliminar)
        }
    },
    computed: {
        total(){
            return this.productosVendidos.reduce((total,item)=>total+Number(item.precio),0);
        }
    },
}
</script>