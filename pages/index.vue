<template>
  <Presentation :posts="postsQuery.results" />
</template>

<script>
import Presentation from '~/components/Presentation'
import postsQuery from '~/apollo/queries/postsQueryHomepage'
export default {
  transition: 'page',
  components: { Presentation },
  apollo: {
    postsQuery: {
      query: postsQuery,
      prefetch: true
    }
  }
}
</script>
