<template>
  <div>
    <header class="card-header">
        <slot name="title"></slot>
    </header>
    <div class="card-content">
        <slot name="content"></slot>
    </div>
    <footer class="card-footer">
        <a :href="item.rest_api_enabler.Link" target="_blank" class="card-footer-item">Leer +</a>
    </footer>
  </div>
</template>

<script>
export default {
    name: 'Post',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
}
</script>