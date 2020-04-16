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

export default {
    name: 'Category',
    data() {
        return {
            posts: [
                {
                id: 1,
                title: "post 1",
                content:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
                },
                {
                id: 2,
                title: "post 2",
                content:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
                },
                {
                id: 3,
                title: "post 3",
                content:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
                },
                {
                id: 4,
                title: "post 4",
                content:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
                },
                {
                id: 5,
                title: "post 5",
                content:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
                },
                {
                id: 6,
                title: "post 6",
                content:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
                }
            ]
        }
    },
    components: {
        Post
    }
}
</script>

<style scope>
    .espacios {
        margin: 10px;
        padding: 0 10px;
    }
</style>