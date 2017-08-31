<template>
  <div class="posts">
    <template v-if="loading > 0">
      Loading ...
    </template>
    <template v-else>
      <Posts :posts="postsQuery" />
    </template>
  </div>
</template>

<script>
import Posts from '~/components/Posts.vue'
import postsQuery from '~/apollo/queries/postsQuery'

export default {
  transition: 'page',
  components: { Posts },
  data() {
    return {
      postsQuery: {},
      loading: 0
    }
  },
  apollo: {
    postsQuery: {
      query: postsQuery,
      prefetch: true,
      loadingKey: 'loading',
    }
  }
}
</script>
