<!-- Liste des posts de blogs -->
<template>
  <ul class="posts">
    <div v-for="post in posts" class="post">
      <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug, post: post } }">
        <li class="" v-html="post.title.rendered"></li>
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
