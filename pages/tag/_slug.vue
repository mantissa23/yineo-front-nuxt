<template>
  <ContentLayout>
    <Posts slot="content" :posts="paginatedPostsByTagId" />
    <div slot="sidebar">
      <h2 class="title is-2">Derniers Billets</h2>
      <PostsSidebar :posts="posts" />
    </div>
  </ContentLayout>
</template> 

<script>
import ContentLayout from '~/components/ContentLayout'
import Posts from '~/components/Posts.vue'
import PostsSidebar from '~/components/PostsSidebar.vue'
import { getPaginatedPostsByTagId, getPosts, getTagBySlug } from '~/services/wpContentApi'

export default {
  transition: 'fade',
  components: { Posts, ContentLayout, PostsSidebar },
  async asyncData ({ params, query }) {
    const tag = await getTagBySlug(params.slug)
    return Promise.all([
      getPaginatedPostsByTagId(10, query ? query.page : 1, tag.id),
      getPosts(10)
    ])
      .then(promisesValues => {
        return {
          paginatedPostsByTagId: promisesValues[0],
          posts: promisesValues[1]
        }
      })
  }
}
</script>
