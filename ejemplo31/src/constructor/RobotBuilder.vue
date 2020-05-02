<template>
    <div class="contenido">
        <button class="agregarCarro" @click="agregar">Agregar al Carro</button>
        <div class="top-row">
            <div class="top part" :class="{'borde_vendido':  onSale}">
                <div class="titulo-robot">
                    {{nombreRobot}}<span v-if="onSale" class="vendido"> Vendido!!!</span>
                </div>
                <!-- <img :src="selectImg.heads" title="head"/> -->
                <selector-partes :datos="dataParts.heads[this.seleccionHeads].src"></selector-partes>
                <button @click="prevHead" class="prev-selector">&#9668;</button>
                <button @click="nextHeads" class="next-selector">&#9658;</button>
            </div>
        </div>
        <div class="middle-row">
            <div class="left part">
                <!-- <img :src="selectImg.armsLeft" title="left arm"/> -->
                <selector-partes :datos="dataParts.arms[this.seleccionarmsleft].src"></selector-partes>
                <button @click="prevarmleft" class="prev-selector">&#9650;</button>
                <button @click="nextarmleft" class="next-selector">&#9660;</button>
            </div>
            <div class="center part">
                <!-- <img :src="selectImg.torsos" title="left arm"/> -->
                <selector-partes :datos="dataParts.torsos[this.selecciontorsos].src"></selector-partes>
                <button @click="prevtorso" class="prev-selector">&#9668;</button>
                <button @click="nexttorsos" class="next-selector">&#9658;</button>
            </div>
            <div class="right part">
                <!-- <img :src="selectImg.armsRight" title="left arm"/> -->
                <selector-partes :datos="dataParts.arms[this.seleccionarmsright].src"></selector-partes>
                <button @click="prevarmsright" class="prev-selector">&#9650;</button>
                <button @click="nextarmsright" class="next-selector">&#9660;</button>
            </div>
        </div>
        <div class="bottom-row">
            <div class="bottom part">
                <!-- <img :src="selectImg.bases" title="left arm"/> -->
                <selector-partes :datos="dataParts.bases[this.seleccionbases].src"></selector-partes>
                <button @click="prevbase" class="prev-selector">&#9668;</button>
                <button @click="nextbases" class="next-selector">&#9658;</button>
            </div>
        </div>
        <div v-show="carro.length > 0">
            <h1>Carro de Compras:</h1>
            <table>
                <thead>
                    <th>Nombre</th>
                    <th class="costos">Costo</th>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in carro" :key="index">
                        <td>{{item.nombre}}</td>
                        <td class="costos">{{item.costo}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import dataParts from '../data/partes.js';
import mixinComponentHoot from './mixinComponentHoot.js';
import SelectorPartes from './SelectorPartes.vue'

export default {
    name: 'RobotBuilder',
    data() {
        return {
            dataParts,
            seleccionHeads: 0,
            seleccionbases: 0,
            selecciontorsos: 0,
            seleccionarmsleft: 0,
            seleccionarmsright: 0,
            carro: []
        }
    },
    components: {
      SelectorPartes  
    },
    mixins: [mixinComponentHoot],
    computed: {
        nombreRobot(){
            return dataParts.heads[this.seleccionHeads].title;
        },
        onSale(){
            return dataParts.heads[this.seleccionHeads].onSale;
        }
    },
    methods: {
        nextHeads(){
            if (this.seleccionHeads >= 0 && this.seleccionHeads < dataParts.heads.length-1) {
                this.seleccionHeads += 1;
            }else {
                this.seleccionHeads = 0;
            }
        },
        nextarmleft(){
            if (this.seleccionarmsleft >= 0 && this.seleccionarmsleft < dataParts.arms.length-1) {
                this.seleccionarmsleft += 1;
            }else {
                this.seleccionarmsleft = 0;
            }
        },
        nexttorsos(){
            if (this.selecciontorsos >= 0 && this.selecciontorsos < dataParts.torsos.length-1) {
                this.selecciontorsos += 1;
            }else {
                this.selecciontorsos = 0;
            }
        },
        nextbases(){
            if (this.seleccionbases >= 0 && this.seleccionbases < dataParts.bases.length-1) {
                this.seleccionbases += 1;
            }else {
                this.seleccionbases = 0;
            }
        },
        nextarmsright(){
            if (this.seleccionarmsright >= 0 && this.seleccionarmsright < dataParts.arms.length-1) {
                this.seleccionarmsright += 1;
            }else {
                this.seleccionarmsright = 0;
            }
        },
        prevHead() {
            if (this.seleccionHeads > 0) {
                this.seleccionHeads -= 1;
            }else {
                this.seleccionHeads = dataParts.heads.length-1;
            }
        },
        prevarmleft(){
            if (this.seleccionarmsleft > 0) {
                this.seleccionarmsleft -= 1;
            }else {
                this.seleccionarmsleft = dataParts.arms.length-1;
            }
        },
        prevtorso(){
            if (this.selecciontorsos > 0) {
                this.selecciontorsos -= 1;
            }else {
                this.selecciontorsos = dataParts.torsos.length-1;
            }
        },
        prevbase(){
            if (this.seleccionbases > 0) {
                this.seleccionbases -= 1;
            }else {
                this.seleccionbases = dataParts.bases.length-1;
            }
        },
        prevarmsright() {
            if (this.seleccionarmsright > 0) {
                this.seleccionarmsright -= 1;
            }else {
                this.seleccionarmsright = dataParts.arms.length-1;
            }
        },
        agregar(){
            let costo =  
              dataParts.heads[this.seleccionHeads].cost 
            + dataParts.arms[this.seleccionarmsleft].cost 
            + dataParts.torsos[this.selecciontorsos].cost 
            + dataParts.arms[this.seleccionarmsright].cost 
            + dataParts.bases[this.seleccionbases].cost;
            
            this.carro.push({ nombre: this.nombreRobot, costo: costo});
            console.log(costo);
        },
    },
}
</script>

<style lang="scss" scoped>
.contenido {
    position: relative;
}
.agregarCarro {
    position: absolute;
    right: 30px;
    width: 220px;
    padding: 3px;
    font-size: 16px;
}
.titulo-robot {
    position: absolute;
    top: -25px;
    text-align: center;
    width: 100%;
}
.vendido {
    color: red;
}
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
} 
.part { 
    img {
        width:165px;
    }
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left { 
    img {
        transform: rotate(-90deg);
    }
}
.right { 
    img {
        transform: rotate(90deg);
    } 
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center { 
    .prev-selector, .next-selector {
        opacity:0.8;
    }
}
.left { 
    .prev-selector {
        top: -28px;
        left: -3px;
        width: 144px;
        height: 25px;
    }
}
.left {
    .next-selector {
        top: auto;
        bottom: -28px;
        left: -3px;    
        width: 144px;
        height: 25px;
    }
}
.right { 
    .prev-selector {
        top: -28px;
        left: 24px;  
        width: 144px;
        height: 25px;
    }
}
.right { 
    .next-selector {
        top: auto;
        bottom: -28px;
        left: 24px;    
        width: 144px;
        height: 25px;
    }
}
.right { 
    .next-selector {
        right: -3px;
    }
}
td, th {
    text-align: left;
    padding: 5px;
    padding-right: 20px;
}
.costos {
    text-align: right;
}
.borde_vendido {
    border: 3px solid red;
}
</style>