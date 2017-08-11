<template>
  <ContentLayout>
    <PostDetail slot="content" :post="post" />
    <PostsSidebar slot="sidebar" :posts="posts" />
  </ContentLayout>
</template>

<script>
import { getPostBySlug, getPosts } from '~/services/wpContentApi'
import PostDetail from '~/components/PostDetail'
import PostsSidebar from '~/components/PostsSidebar'
import ContentLayout from '~/components/ContentLayout'

export default {
  transition: 'fade',
  components: { PostDetail, ContentLayout, PostsSidebar },
  async asyncData (params) {
    return Promise.all([
      getPostBySlug(params.params.slug),
      getPosts(10),
    ]).then(promisesValues => {
      return {
        post: promisesValues[0],
        posts: promisesValues[1]
      }
    })
  }
}
</script>
