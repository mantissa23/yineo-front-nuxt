<template>
  <section class="container content post">
    <div>
      <h1 class="title is-3" v-html="post.title.rendered">
       
      </h1>

      <div v-html="post.content.rendered" class="content"></div>
    </div>
  </section>
</template>

<script>
import content from '~/services/wpContentApi'

export default {
  transition: 'fade',
  async asyncData ({ params }) {
    return { post: await content.getPostBySlug(params.slug) }
  }
}
</script>
