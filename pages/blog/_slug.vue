<template>
  <Post :post="post" />
</template>

<script>
import { getPostBySlug } from '~/services/wpContentApi'
import Post from '~/components/Post'

export default {
  transition: 'page',
  layout: 'post',
  components: { Post },
  async asyncData (params) {
    return {
      post: await getPostBySlug(params.params.slug)
    }
  }
}
</script>
