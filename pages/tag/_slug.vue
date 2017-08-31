<!-- display page for a specific tag -->
<template>
  <div class="section">
    <div class="has-text-centered">
      <em>Les articles classés : </em>
      <h1 class="title is-1"> {{tag.name}} </h1>
    </div>
    <Posts :posts="postsQueryByTag" />
  </div>
</template> 

<script>
import Posts from '~/components/Posts.vue'
import tagByAlias from '~/apollo/queries/tagByAlias'
import postsQueryByTag from '~/apollo/queries/postsQueryByTag'

export default {
  transition: 'page',
  components: { Posts },
  data () {
    return {
      postsQueryByTag: {}
    }
  },
  async asyncData ({ app, params }) {
    // get tag by its slug
    let result = await app.apolloProvider.defaultClient.query({
      query: tagByAlias,
      variables: { 'path': '/' + params.slug }
    })
    const tag = result.data.route.entity
    // get post lists by tag id
    result = await app.apolloProvider.defaultClient.query({
      query: postsQueryByTag,
      variables: { 'tid': tag.id }
    })
    return {
      tag,
      postsQueryByTag: result.data.postsQueryByTag
    }
  }
}
</script>
