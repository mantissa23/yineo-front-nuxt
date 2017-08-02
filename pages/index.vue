<template>
  <ContentLayout>
    <Presentation slot="content"/>
    <div slot="sidebar">
      <h2 class="title is-2">Derniers billets</h2>
      <PostsSidebar :posts="posts" />
    </div>
  </ContentLayout>
</template>

<script>
import ContentLayout from '~/components/ContentLayout'
import Presentation from '~/components/Presentation'
import PostsSidebar from '~/components/PostsSidebar'
import { getPosts } from '~/services/wpContentApi'

export default {
  transition: 'fade',
  components: { ContentLayout, Presentation, PostsSidebar },
  async asyncData ({ query }) {
    const posts = await getPosts(10)
    return { posts }
  }
}
</script>

