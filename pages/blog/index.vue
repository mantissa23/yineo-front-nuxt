<template>
  <Posts :posts="postsQuery" />
</template>

<script>
import Posts from '~/components/Posts.vue'
import postsQuery from '~/apollo/queries/postsQuery'

export default {
  transition: 'page',
  components: { Posts },
  apollo: {
    postsQuery: {
      query: postsQuery,
      prefetch: true
    }
  }
}
</script>
