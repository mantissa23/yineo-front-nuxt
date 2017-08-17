<template>
  <div>
    <div class="columns">
      <div class="column is-one-third">
        <img v-if="post.featured_media_url" :src="post.featured_media_url" />
      </div>
      <div class="column">
        <h2>{{post.title.rendered}}</h2>
        <div class="content" v-html="post.excerpt.rendered"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: { type: Object, default: {} }
  }
}
</script>