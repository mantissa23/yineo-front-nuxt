<!-- Post list as teasers -->
<template>
  <section class="posts section">
    <div v-for="post in posts.data" class="post">

      <div class="columns">

        <div class="column is-one-quarter">

          <div class="image-wrapper has-text-centered">
            <img v-if="post.featured_media_url" :src="post.featured_media_url" />
          </div>

        </div>

        <div class="column">

          <nuxt-link class="title is-3" :to="{ name: 'blog-slug', params: { slug: post.slug, post: post } }">
            <h2 v-html="post.title.rendered"></h2>
          </nuxt-link>

          <div class="content" v-html="post.excerpt.rendered"></div>

          <div>
            <BulmaButtonLink :to="{ name: 'blog-slug', params: { slug: post.slug, post: post } }"> Lire l'article </BulmaButtonLink>
          </div>

        </div>
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
  props: {
    posts: { type: Object, default: () => {} }
  },
  components: { Pagination, BulmaButtonLink }
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
