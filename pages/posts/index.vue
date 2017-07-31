<template>
  <posts :posts="posts" />
</template> 

<script>
import Posts from '~components/Posts.vue'
import { getPosts } from '~/services/wpContentApi'

export default {
  transition: 'fade',
  components: { Posts },
  async asyncData ({ query }) {
    const posts = await getPosts(10, query ? query.page : 1)
    return { posts }
  }
}
</script>
