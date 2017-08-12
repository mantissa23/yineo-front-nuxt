<template>
  <PostDetail :post="post" />
</template>

<script>
import { getPostBySlug } from '~/services/wpContentApi'
import PostDetail from '~/components/PostDetail'

export default {
  transition: 'fade',
  components: { PostDetail },
  async asyncData (params) {
    return {
      post: await getPostBySlug(params.params.slug)
    }
  }
}
</script>
