<!-- Display a full post object -->
<template>
  <div>
    <div class="container is-fluid">
      <section class="hero hero-title is-bold">
        <div class="hero-body" :style="{ 'background-image': 'url(https://dev-yineo-back.pantheonsite.io' + post.image + ')' }">
          <h1 class="title is-1" v-html="post.title"></h1>
        </div>
      </section>
    </div>

    <div class="container is-narrow">
      <section class="post section">
        <div v-html="post.body" class="content"></div>
        <TagsLinks v-if="post.field_tags" :tags="post.field_tags" />
      </section>
    </div>
  </div>
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

<style scoped>
.hero-title .hero-body {
  padding: 4rem 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-title .title {
  color: white;
  background-color: rgba(0, 0, 0, .5);
  padding: 1rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, .5);
  text-align: center;
}
</style>
