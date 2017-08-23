<!-- Post list as teasers -->
<template>
  <section class="posts section">
    <div v-for="post in posts.data" class="post">

      <nuxt-link class="title is-3" :to="{ name: 'blog-slug', params: { slug: post.slug, post: post } }">
        <h2 v-html="post.title.rendered"></h2>
      </nuxt-link>

      <img v-if="post.featured_media_url" :src="post.featured_media_url" />

      <div class="content" v-html="post.excerpt.rendered"></div>

      <div>
        <BulmaButtonLink :to="{ name: 'blog-slug', params: { slug: post.slug, post: post } }"> Lire l'article </BulmaButtonLink>
      </div>
      <hr />
    </div>

    <Pagination :totalPages="posts.totalPages" />

  </section>
</template>

<script>
import BulmaButtonLink from './BulmaButtonLink'
import Pagination from './Pagination'
export default {
  components: { Pagination, BulmaButtonLink },
  props: {
    posts: { type: Array, default: {} }
  }
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
