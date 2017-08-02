<template>
  <ContentLayout>
    <PostDetail slot="content" :post="post" />
  </ContentLayout>
</template>

<script>
import { getPostBySlug } from '~/services/wpContentApi'
import PostDetail from '~/components/PostDetail'
import ContentLayout from '~/components/ContentLayout'

export default {
  transition: 'fade',
  components: { PostDetail, ContentLayout },
  async asyncData ({ params }) {
    const post = await getPostBySlug(params.slug)
    return { post }
  }
}
</script>
