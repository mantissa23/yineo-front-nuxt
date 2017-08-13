<!-- display page for a specific tag -->
<template>
  <div class="section">
    <em>Les articles classés : </em>
    <h1 class="title is-1"> {{tag.name}} </h1>
    <Posts :posts="paginatedPostsByTagId" />
  </div>
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
