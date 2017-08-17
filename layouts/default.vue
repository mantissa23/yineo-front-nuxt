<!-- main layout -->
<template>
  <div>
    <AppHeader/>
    <AppNavigation />
  
    <div class="container">
      <div class="columns">
  
        <div class="column is-two-thirds">
          <div class="mobile-padding">
            <nuxt/>
          </div>
        </div>
  
        <div class="column">
          <section class="section">
            <div class="mobile-padding">
              <TwitterFollowMe/>
              <hr/>
              <h2 class="title is-2">Derniers billets</h2>
              <PostsSidebar :posts="this.$store.state.postsSidebar" />
            </div>
          </section>
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
}
</script>

<style scoped>
@media screen and (max-width: 1008px) {
  .mobile-padding {
    padding: 24px;
  }
}
</style>
