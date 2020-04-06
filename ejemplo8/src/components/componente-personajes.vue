<template>
    <div class="arreglo">
        <img :src="src" :alt="'La foto es: '+id">
        <span v-text="persona"></span>
    </div>
</template>

<script>
export default {
    props: {
        persona: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: false
        }
    }
}
</script>

<style>
    .arreglo {
        color: green;
        font-size: 1.5em;
        padding: 0.5em;
    }
    .arreglo img {
        border-radius: 50%;
        width: 100px;
        vertical-align: middle;
    }
</style>