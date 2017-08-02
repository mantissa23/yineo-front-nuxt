<template>
  <ContentLayout>
    <Posts slot="content" :posts="paginatedPosts" />
    <PostsSidebar slot="sidebar" :posts="posts" />
  </ContentLayout>
</template> 

<script>
import ContentLayout from '~/components/ContentLayout'
import Posts from '~/components/Posts.vue'
import PostsSidebar from '~/components/PostsSidebar.vue'
import { getPaginatedPosts, getPosts } from '~/services/wpContentApi'

export default {
  transition: 'fade',
  components: { Posts, ContentLayout, PostsSidebar },
  async asyncData (params) {
    return Promise.all([
      getPaginatedPosts(10, params.query ? params.query.page : 1),
      getPosts(40)
    ]).then(promisesValues => {
      return {
        paginatedPosts: promisesValues[0],
        posts: promisesValues[1]
      }
    })
  }
}
</script>
