<template>
  <Posts :posts="paginatedPosts" />
</template>

<script>
import Posts from '~/components/Posts.vue'
import { getPaginatedPosts } from '~/services/wpContentApi'

export default {
  transition: 'fade',
  components: { Posts },
  async asyncData (params) {
    return {
      paginatedPosts: await getPaginatedPosts(10, params.query ? params.query.page : 1),
    }
  }
}
</script>
