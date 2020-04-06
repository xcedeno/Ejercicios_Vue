<template>
  <div id="app">
      <h1>Cuenta Regresiva</h1>
      <div id="mostrar" v-text="conteo"></div>
      <button v-for="(boton,index) in botones" :key="index" @click.prevent="cuenta(index,boton.valor)">{{boton.tiempo}}</button> 
  </div>
</template>

<script>
let limpiarTiempo;
export default {
    name:"App",
    data() {
        return {
            botones: [
                {tiempo: "2s", valor:2},
                {tiempo: "3s", valor:3},
                {tiempo: "55s", valor:55},
                {tiempo: "89s", valor:89},
            ],
            conteo: "00:00:00 min/seg"
        }
    },
    methods: {
        cuenta(index,valor){
            clearInterval(limpiarTiempo);
            switch (index) {
                case 0:
                    this.conteo = `00:00:02 min/seg`;
                    limpiarTiempo = setInterval(()=>{
                        if (valor > 0) {
                            valor--;
                            this.conteo = `00:00:0${valor} min/seg`
                        }else {
                            clearInterval(limpiarTiempo);
                            this.conteo = "00:00:00 min/seg";
                        }
                    },1000);
                    break;
                case 1:
                    this.conteo = `00:00:03 min/seg`;
                    limpiarTiempo = setInterval(()=>{
                        if (valor > 0) {
                            valor--;
                            this.conteo = `00:00:0${valor} min/seg`
                        }else {
                            clearInterval(limpiarTiempo);
                            this.conteo = "00:00:00 min/seg";
                        }
                    },1000);
                    break;
                case 2:
                    this.conteo = `00:00:55 min/seg`;
                    limpiarTiempo = setInterval(()=>{
                        if (valor > 0) {
                            valor--;
                            this.conteo = `00:00:${valor} min/seg`
                            if (valor < 10) {
                                this.conteo = `00:00:0${valor} min/seg`
                            }else{
                                this.conteo = `00:00:${valor} min/seg`
                        }
                        }else {
                            clearInterval(limpiarTiempo);
                            this.conteo = "00:00:00 min/seg";
                        }
                    },1000);
                    break;  
                case 3:
                    let ocheTa = 1;
                    let cuaOcho = 48; 
                    let cincuNue = 59;
                    let aux = 0;
                    this.conteo = `00:01:48 min/seg`;
                    limpiarTiempo = setInterval(()=>{
                        if (cuaOcho > 0) {
                            cuaOcho--;
                            this.conteo = `00:01:${cuaOcho} min/seg`
                            if (aux == 0 && cuaOcho < 10) {
                                this.conteo = `00:01:0${cuaOcho} min/seg`
                                if (cuaOcho <= 0) {
                                    this.conteo = `00:00:59 min/seg`;
                                    aux=1;
                                }
                            } else {
                                this.conteo = `00:01:${cuaOcho} min/seg`
                            }
                        } else if (aux == 1 && cincuNue > 0){
                            cincuNue--;
                            this.conteo = `00:00:${cincuNue} min/seg`
                            if (cincuNue < 10) {
                                this.conteo = `00:00:0${cincuNue} min/seg`
                            } else {
                                this.conteo = `00:00:${cincuNue} min/seg`
                            }
                        } else {
                            clearInterval(limpiarTiempo);
                            this.conteo = "00:00:00 min/seg";
                        }
                    },1000);
                    break;   
                default:
                    break;
            }
        }
    },
}
</script>

<style>
    body {
        text-align: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 20px;
    }
    button {
        margin: 0.5em;
        padding: 0.4em;
    }
</style>