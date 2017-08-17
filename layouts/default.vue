<!-- main layout -->
<template>
  <div>
    <AppHeader />
    <AppNavigation />
    
    <div class="container">
      <div class="mobile-padding">
        <nuxt />
      </div>
    </div>
    
    <AppFooter />
  </div>
</template>

<script>
  import AppHeader from '~/components/AppHeader'
  import AppNavigation from '~/components/AppNavigation'
  import AppFooter from '~/components/AppFooter'

  export default {
    components: {AppHeader, AppNavigation, AppFooter},
  }
</script>

<style lang="sass" scoped>
  =touch
    .mobile-padding
      padding : 24px;
</style>
