<!--  Last posts titles in sidebar -->
<template>
  <ul class="posts">
    <div v-for="post in posts" class="post">
      <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug, post: post } }">
        <li><h3 v-html="post.title.rendered"></h3></li>
      </nuxt-link>
    </div>
  </ul>
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
