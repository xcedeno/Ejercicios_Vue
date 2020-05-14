<template>
    <div>
        <h1>Star Wars</h1>
        <ul>
            <li v-for="(item, index) in personas" :key="index">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'StarWar',
    data() {
        return {
            personas: []
        }
    },
    methods: {
        async llamdo(){
            try {
                const res = await axios.get('https://swapi.dev/api/people/');
                this.personas = res.data.results;
            } catch (error) {
                console.error(error);
            }
        }
    },
    mounted() {
        this.llamdo();
    }
}
</script>

<style>

</style>