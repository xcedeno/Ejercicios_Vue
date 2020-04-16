<template>
  <div>
    <div class="container content">
        <div class="columns is-multiline is-centered">
            <div class="card espacios" v-for="(item, index) in posts" :key="index">
                <post :item="item">
                    <p slot="title" class="card-header-title">{{item.title}}</p>
                    <div slot="content" class="content">
                        {{item.content}}
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
            postMobile: []
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
                this.posts = data
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
        this.loadPost();
        console.log(this.$route.query.page);
    },
}
</script>

<style scope>
    .espacios {
        margin: 10px;
        padding: 0 10px;
    }
</style>