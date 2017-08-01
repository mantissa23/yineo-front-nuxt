<template>
  <Posts :posts="posts" />
</template> 

<script>
import Posts from '~components/Posts.vue'
import { getPostsByTagId, getTagBySlug } from '~/services/wpContentApi'

export default {
  transition: 'fade',
  components: { Posts },
  async asyncData ({ params, query }) {
    const tag = await getTagBySlug(params.slug)
    const posts = await getPostsByTagId(10, query ? query.page : 1, tag.id)
    return { posts }
  }
}
</script>
