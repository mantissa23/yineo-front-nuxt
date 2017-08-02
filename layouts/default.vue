<!-- main layout -->
<template>
  <div>
    <AppNavigation />
    <AppHeader/>
    <nuxt/>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppNavigation from '~/components/AppNavigation.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: { AppHeader, AppNavigation, AppFooter }
}
</script>
