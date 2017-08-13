<template>
  <Posts :posts="posts" />
</template>

<script>
import Posts from '~/components/Posts.vue'
import { getPaginatedPosts } from '~/services/wpContentApi'

export default {
  transition: 'fade',
  components: { Posts },
  async asyncData (params) {
    return {
      posts: await getPaginatedPosts(10, params.query ? params.query.page : 1),
    }
  }
}
</script>
