<template>
  <div class="container bg-light">
      <h1>Post</h1>
      <form method="post">
        <div class="form-group">
            <label for="exampleInputEmail1">Titulo: </label>
            <input type="text" class="form-control" v-model="title">
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Comentario: </label>
            <textarea class="form-control" v-model="body" rows="3"></textarea>
        </div>
        <button type="submit" @click.prevent="enviar" class="btn btn-primary">Enviar</button>
      </form>
      <hr>
    <div v-if="infoEnviada">
        <h3>La información enviada fue: </h3>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Mensaje</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in infoRecibida" :key="index">
                    <th>{{item.userID}}</th>
                    <td>{{item.title}}</td>
                    <td>{{item.body}}</td>
                </tr>         
            </tbody>
            </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'POst',
    data() {
        return {
            title: '',
            body: '',
            infoEnviada: false,
            infoRecibida: []
        }
    },
    methods: { 
        enviar(){
            console.log("enviando")
            let userID = Math.ceil(Math.random()*80);
            axios.post('https://jsonplaceholder.typicode.com/posts',{
                data: {
                    title: this.title,
                    body: this.body,
                    userID: userID
                }
            }).then(response => {
                console.log(response.data.data);
                this.infoRecibida.push(response.data.data);
                this.title = '';
                this.body = '';
                this.infoEnviada = true;
                alert("Se envió la información")
            }).catch(error => console.error(error))
        } 
    }
}
</script>

<style>

</style>