<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8" v-if="users !== null && users.uid == usersID">
                <h1 class="font-weight-light text-center">Attendees</h1>
                <div class="card bg-light mb-4">
                    <div class="card-body text-center">
                        <div class="input-group input-group-lg">
                            <input type="text" placeholder="Search Attendees" class="form-control" v-model="searchQuery" ref="buscador"/>
                            <div class="input-group-append">
                                <button class="btn btn-sm btn-outline-info" title="Pick a random attendee" @click="seleccionAleatoria">
                                    <font-awesome-icon icon="random"></font-awesome-icon>
                                </button>
                                <button @click="reinicio" class="btn btn-sm btn-outline-info" title="Reset Search" >
                                    <font-awesome-icon icon="undo"></font-awesome-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-8 col-sm-6 col-md-4 col-lg-3 mb-2 p-0 px-1" v-for="item in busquedaFiltro" :key="item.id">
                <div class="card">
                    <div class="card-body px-3 py-2 d-flex align-items-center justify-content-center">
                        <div class="btn-group pr-2" v-if="users !== null && users.uid == usersID">
                            <button class="btn btn-sm" :class="[item.estrellaEvento ? 'text-danger':'', 'btn-outline-secondary']" title="Crea un usuario para iniciar" @click="estrella(item.id)">
                                <font-awesome-icon icon="star"></font-awesome-icon>
                            </button>
                            <a class="btn btn-sm btn-outline-secondary" title="Enviar correo al usuario" :href="'mailto:'+item.email" target="_blank">
                                <font-awesome-icon icon="envelope"></font-awesome-icon>
                            </a>
                            <button class="btn btn-sm btn-outline-secondary" title="Borrar reunion" @click="borrarEvento(item.id)">
                                <font-awesome-icon icon="trash"></font-awesome-icon>
                            </button>
                        </div>
                        <div>{{item.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {db} from '../main';

export default {
    name: 'Attendees',
    props: ["users"],
    data() {
        return {
            attendees: [],
            usersID: this.$route.params.usersID,
            meetingsID: this.$route.params.meetingsID,
            searchQuery: '',
            mostrandoAttendees: []
        }
    },
    computed: {
        busquedaFiltro(){
            return this.mostrandoAttendees.filter(item => item.name.toLowerCase().match(this.searchQuery.toLowerCase()) && true)
        }
    },
    methods: {
        borrarEvento(id){
            if (this.users && this.usersID == this.users.uid){
                db.collection("users").doc(this.users.uid).collection("meetings").doc(this.meetingsID).collection("atenciones").doc(id).delete();
            }
        },
        estrella(id){
            if (this.users && this.usersID == this.users.uid){
                const referencia = db.collection("users").doc(this.users.uid).collection("meetings").doc(this.meetingsID).collection("atenciones").doc(id);
                referencia.get().then(doc => {
                    const estrellaEvento = doc.data().estrellaEvento;
                    if (estrellaEvento){
                        referencia.update({
                            estrellaEvento: !estrellaEvento
                        })
                    }else{
                        referencia.update({
                            estrellaEvento: true
                        })
                    }
                })
            }
        },
        seleccionAleatoria(){
            const aleatorioAtt = Math.floor(Math.random() * this.attendees.length);
            this.mostrandoAttendees = [this.attendees[aleatorioAtt]];
        },
        reinicio(){
            this.mostrandoAttendees = this.attendees;
            this.searchQuery = "";
            this.$refs.buscador.focus();
        }
    },
    mounted() {
        db.collection("users").doc(this.usersID).collection("meetings").doc(this.meetingsID).collection("atenciones").onSnapshot(result=>{
            const auxiliar = [];
            result.forEach(element => {
                auxiliar.push({ 
                    id: element.id,
                    name: element.data().name,
                    email: element.data().email,
                    estrellaEvento: element.data().estrellaEvento
                })
            });
            this.attendees = auxiliar;
            this.mostrandoAttendees = this.attendees;
        })
    },
}
</script>