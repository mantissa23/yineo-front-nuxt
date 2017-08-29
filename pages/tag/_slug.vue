<!-- display page for a specific tag -->
<template>
  <div class="section">
    <em>Les articles classés : </em>
    <h1 class="title is-1"> {{tag.name}} </h1>
    <Posts :posts="paginatedPostsByTagId" />
  </div>
</template> 

<script>
import Posts from '~/components/Posts.vue'

export default {
  transition: 'page',
  components: { Posts },
  async asyncData ({ params, query }) {
    const tag = {id:2}
    return {
      tag,
      paginatedPostsByTagId: []
    }
  }
}
</script>
