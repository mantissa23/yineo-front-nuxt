<template>
  <section class="container content posts">
    <div>
      <posts :posts="posts"/>
    </div>
  </section>
</template> 

<script>

import Posts from '~components/Posts.vue'
import content from '~/services/wpContentApi'

export default {
  transition: 'fade',
  async asyncData () {
    return { posts: await content.getPosts() }
  },
  components: {
    Posts
  }
}
</script>
