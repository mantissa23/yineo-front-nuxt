<template>
  <Posts :posts="paginatedPostsByTagId" />
</template> 

<script>
import Posts from '~/components/Posts.vue'
import { getTagBySlug, getPaginatedPostsByTagId } from '~/services/wpContentApi'

export default {
  transition: 'fade',
  components: { Posts },
  async asyncData ({ params, query }) {
    const tag = await getTagBySlug(params.slug)
    return {
      tag,
      paginatedPostsByTagId: await getPaginatedPostsByTagId(10, query ? query.page : 1, tag.id)
    }
  }
}
</script>
