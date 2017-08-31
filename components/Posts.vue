<!-- Post list as teasers -->
<template>
  <section class="posts section">
    <div v-for="post in posts.results" class="post">

      <div class="columns">

        <div class="column is-one-quarter">

          <div class="image-wrapper has-text-centered">
            <img v-if="post.image" :src="post.image.derivative.url" />
          </div>

        </div>

        <div class="column">

          <nuxt-link class="title is-3" :to="{ name: 'blog-slug', params: { slug: post.url.alias.replace('/', '') } }">
            <h2 v-html="post.title"></h2>
          </nuxt-link>

          <div class="content" v-html="post.teaser"></div>

          <TagsLinks v-if="post.tags" :tags="post.tags" />

          <div>
            <BulmaButtonLink :to="{ name: 'blog-slug', params: { slug: post.url.alias.replace('/', ''), post: post } }"> Lire l'article </BulmaButtonLink>
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
import TagsLinks from '~/components/TagsLinks'
export default {
  props: {
    posts: { type: Object, default: () => {} }
  },
  components: { Pagination, BulmaButtonLink, TagsLinks },
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
