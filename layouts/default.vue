<!-- main layout -->
<template>
  <div>
    <AppNavigation />
    <AppHeader/>
  
    <div class="container">
      <div class="columns">
  
        <div class="column is-two-thirds">
          <nuxt/>
        </div>
  
        <div class="column">
          <TwitterFollowMe/>
          <hr/>
          <PostsSidebar :posts="posts" />
        </div>
  
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader'
import AppNavigation from '~/components/AppNavigation'
import AppFooter from '~/components/AppFooter'
import TwitterFollowMe from '~/components/TwitterFollowMe'
import PostsSidebar from '~/components/PostsSidebar'
import { getPosts } from '~/services/wpContentApi'

export default {
  components: { AppHeader, AppNavigation, AppFooter, TwitterFollowMe, PostsSidebar },
  data () {
    return {
      posts: []
    }
  },
  async created () {
    this.posts = await getPosts(10)
  }
}
</script>
