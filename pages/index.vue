<template>
  <Homepage :posts="posts" />
</template>

<script>
import Homepage from '~/components/Homepage'
import { getPosts } from '~/services/wpContentApi'

export default {
  transition: 'fade',
  components: { Homepage },
  async asyncData ({ query }) {
    const posts = await getPosts(10)
    return { posts: posts.data }
  }
}
</script>

