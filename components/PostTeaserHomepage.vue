<template>
  <div>
    <div class="columns">
      <div class="column is-one-third">
        <img v-if="post.image" :src="post.image.derivative.url" />
      </div>
      <div class="column">
        <h2>{{post.title}}</h2>
        <div class="content" v-html="post.teaser"></div>
        <div>
          <BulmaButtonLink :to="{ name: 'blog-slug', params: { slug: post.url.alias.replace('/', '') } }"> Lire l'article </BulmaButtonLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BulmaButtonLink from './BulmaButtonLink'
export default {
  components: { BulmaButtonLink },
  props: {
    post: { type: Object, default: {} }
  }
}
</script>