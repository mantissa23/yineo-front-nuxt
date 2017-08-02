<!-- Liste des posts de blogs -->
<template>
  <div class="posts">
    <section class="section">
      <div v-for="post in posts.data" class="post">
  
        <nuxt-link class="title is-3" :to="{ name: 'blog-slug', params: { slug: post.slug, post: post } }">
          <h2 v-html="post.title.rendered"></h2>
        </nuxt-link>
  
        <img :src="post.featured_media_url" />
  
        <div class="content" v-html="post.excerpt.rendered"></div>
        <div>
          <nuxt-link class="button is-primary" :to="{ name: 'blog-slug', params: { slug: post.slug, post: post } }"> Lire l'article </nuxt-link>
        </div>
        <hr />
      </div>
  
    </section>
  
    <section class="section">
      <Pagination :totalPages="posts.totalPages" />
    </section>
  
  </div>
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
