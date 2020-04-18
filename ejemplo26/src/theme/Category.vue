<template>
  <div>
      <progress class="progress is-small is-primary" max="100" v-show="mostrar">15%</progress>
    <div class="container">
        <div class="columns is-multiline">
            <div class="card column is-12-mobile is-6-tablet is-4-desktop espacios" v-for="(item, index) in posts" :key="index">
                <post :item="item">
                    <p slot="title" class="card-header-title">{{item.title.rendered}}</p>
                    <div slot="content" class="content" v-html="item.content.rendered">
                    </div>
                </post>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Post from './Post.vue';
import appService from '../app.service.js';

export default {
    name: 'Category',
    data() {
        return {
            id: this.$route.params.id,
            postFron: [],
            posts: [],
            postMobile: [],
            mostrar: false
        }
    },
    components: {
        Post
    },
    methods: {
        loadPost(){
            let categoryId = 2;
            if (this.id == 'mobile') {
                categoryId = 11;
            };
            appService.getPost(categoryId).then(data => {
                this.posts = data;
                this.mostrar = false;
            })   
        }
    },
    watch: {
        '$route' (to,from) {
            this.id = to.params.id;
            this.loadPost();
        }
    },
    created() {
        console.log(this.id);
        this.mostrar = true;
        this.loadPost();
        console.log(this.$route.query.page);
    },
}
</script>

<style scope>
    .espacios {
        border: 1px solid black;
    }
</style>