<template>
  <section class="container content posts">
    <div>
      <posts :posts="posts"/>
    </div>
  </section>
</template> 

<script>

import Posts from '~components/Posts.vue'
import {getPosts} from '~/services/wpContentApi'

export default {
  transition: 'fade',
  async asyncData ({query}) {
    const posts = await getPosts(10, query ? query.page : 1)
    return { posts }
  },
  components: {
    Posts
  }
}
</script>
