<template>
    <div>
        <p v-text="titulo"></p>    
    </div>
</template>

<script>
export default {
    name: 'Cliente',
    props: ['cliente'],
    computed: {
        titulo(){
            return `El clientes es ${this.cliente}, quien recomienda el blog`
        }
    },
}
</script>