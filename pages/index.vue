<template>
  <Presentation :posts="postsQuery.results" />
</template>

<script>
import Presentation from '~/components/Presentation'
import postsQuery from '~/apollo/queries/postsQueryHomepage'
export default {
  transition: 'page',
  components: { Presentation },
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
      loadingKey: 'loading'
    }
  }
}
</script>
