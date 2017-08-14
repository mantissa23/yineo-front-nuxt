<template>
  <Presentation />
</template>

<script>
import Presentation from '~/components/Presentation'
import { getPosts } from '~/services/wpContentApi'

export default {
  transition: 'page',
  components: { Presentation },
  async asyncData () {
    return {
      posts: await getPosts(10)
    }
  }
}
</script>
