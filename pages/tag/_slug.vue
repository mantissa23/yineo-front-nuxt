<!-- display page for a specific tag -->
<template>
  <div class="section">
    <em>Les articles classés : </em>
    <!--<h1 class="title is-1"> {{tag.name}} </h1>-->
    <Posts :posts="postsQueryByTag" />
  </div>
</template> 

<script>
import Posts from '~/components/Posts.vue'
import postsQueryByTag from '~/apollo/queries/postsQueryByTag'

export default {
  transition: 'page',
  components: { Posts },
  apollo: {
    postsQueryByTag: {
      query: postsQueryByTag,
      prefetch: () => ({ tid: 3}),
      variables () {
        return { tid: 3 }
      }
    }
  }
}
</script>
