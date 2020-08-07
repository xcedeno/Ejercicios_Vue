<template>
    <div class="body-part position-relative">
        <div class="prev-area" @mouseover="hoverPrev = true" @mouseleave="hoverPrev = false">
            <button class="prev-btn" v-show="hoverPrev" @click="selectPrev">&#10094;</button>
        </div>
        <img :src="parteSeleccionada.src" :alt="parteSeleccionada.id" class="body-img heads-img about-selected">
        <div class="next-area" @mouseover="hoverNext = true" @mouseleave="hoverNext = false">
            <button class="next-btn" v-show="hoverNext" @click="selectNext">&#10095;</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PartSelected',
    props: {
        parts: {
            type: Array,
            required: true
        },
        aleatorio: {
            type: Boolean
        }
    },
    data() {
        return {
            hoverPrev: false,
            hoverNext: false,
            selectedInddex: 0,
            minIndex: 0,
            maxIndex: this.parts.length - 1
        }
    },
    methods: {
        selectPrev(){
            this.selectedInddex = this.selectedInddex > this.minIndex ? this.selectedInddex-1 : this.maxIndex;
            this.emitSelected();
        },
        selectNext(){
            this.selectedInddex = this.selectedInddex < this.maxIndex ? this.selectedInddex+1 : this.minIndex; 
            this.emitSelected();
        },
        emitSelected(){
            this.$emit('partSelected',this.parteSeleccionada);
        }
    },
    computed: {
        parteSeleccionada(){
            return this.parts[this.selectedInddex];
        }
    },
    watch: {
        aleatorio(valor){
            if (valor == true){
                this.selectedInddex = Math.floor(Math.random()*7);
                this.$emit('cambiarSelectedIndex',true);
                this.emitSelected();
            }
        }
    },
    created() {
        this.emitSelected();
    },
}
</script>

<style>

</style>