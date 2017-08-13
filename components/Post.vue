<!-- Display a full post object -->
<template>
  <section class="post section">
    <h1 class="title is-3" v-html="post.title.rendered"></h1>
    <div class="featured-media">
      <img :src="post.featured_media_url" />
    </div>
    <div v-html="post.content.rendered" class="content"></div>
    <TagsLinks v-if="post._embedded['wp:term'][1]" :tags="post._embedded['wp:term'][1]" />
  </section>
</template>

<script>
import TagsLinks from '~/components/TagsLinks'
export default {
  components: { TagsLinks },
  props: {
    post: { type: Object, default: {} }
  }
}
</script>
