<!-- Liste des posts de blogs -->
<template>
  <div class="posts">
    <div v-for="post in posts" class="post">
      <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug, post: post } }">
        <h4 class="title is-6" v-html="post.title.rendered"></h4>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: { type: Array, default: () => [] }
  }
}
</script>

<style scoped>
.post {
  margin-bottom: 1rem
}
</style>
