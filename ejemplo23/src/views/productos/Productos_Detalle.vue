<template>
  <div>
    <h1>Detalles del Producto</h1>
        <b-card-group>
            <b-card :title="producto_recibido.titulo" :img-src="producto_recibido.imagen" :img-alt="producto_recibido.id" img-top>
                <b-card-text>{{producto_recibido.descripcion}}</b-card-text>
                <b-card-text>Precio del producto: {{producto_recibido.precio | moneda}}</b-card-text>
            </b-card>
        </b-card-group>
  </div>
</template>

<script>
import accounting from 'accounting';

export default {
    name: 'Producto-Detalle',
    data() {
        return {
            producto_recibido: this.$route.params.id,
        }
    },
    filters: {
        moneda(valor){
            return accounting.formatMoney(valor,"",2,".", ",");
        }
    }
}
</script>

<style>

</style>