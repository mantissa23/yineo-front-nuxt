<template>
  <posts :posts="posts" />
</template> 

<script>
import Posts from '~/components/Posts.vue'
import { getPosts } from '~/services/wpContentApi'

export default {
  transition: 'fade',
  components: { Posts },
  async asyncData (params) {
    const posts = await getPosts(10, params.query ? params.query.page : 1)
    return { posts }
  }
}
</script>
