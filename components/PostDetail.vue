<!-- Display a full post object -->
<template>
  <section class="container content post section">
    <h1 class="title is-3" v-html="post.title.rendered"></h1>
    <div class="featured-media">
      <img :src="post.featured_media_url" />
    </div>
    <div v-html="post.content.rendered" class="content"></div>
    <div v-if="post._embedded['wp:term'][1]" class="tags">
      <ul>
        <li class="tag is-medium" v-for="tag in post._embedded['wp:term'][1]">
          <nuxt-link :to="{ name: 'tag-slug', params: { slug: tag.slug } }"> {{tag.name}} </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    post: { type: Object, default: {} }
  }
}
</script>
