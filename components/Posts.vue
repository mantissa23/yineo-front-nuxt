<!-- Liste des posts de blogs -->
<template>
  <section class="posts section">
    <div v-for="post in posts.data" class="post">
  
      <nuxt-link class="title is-3" :to="{ name: 'blog-slug', params: { slug: post.slug, post: post } }">
        <h2 v-html="post.title.rendered"></h2>
      </nuxt-link>
  
      <img v-if="post.featured_media_url" :src="post.featured_media_url" />
  
      <div class="content" v-html="post.excerpt.rendered"></div>
      <div>
        <nuxt-link class="button is-primary" :to="{ name: 'blog-slug', params: { slug: post.slug, post: post } }"> Lire l'article </nuxt-link>
      </div>
      <hr />
    </div>
  
    <Pagination :totalPages="posts.totalPages" />
  
  </section>
</template>

<script>
import Pagination from '~/components/Pagination'
export default {
  components: { Pagination },
  props: ['posts']
}
</script>

<style scoped>
h2 {
  margin-bottom: 1rem
}

.post {
  margin-bottom: 2rem;
}

.pagination-list {
  list-style-type: none
}
</style>
