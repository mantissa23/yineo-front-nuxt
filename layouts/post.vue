<template>
  <div>
    <AppHeader />
    <AppNavigation />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader'
import AppNavigation from '~/components/AppNavigation'
import AppFooter from '~/components/AppFooter'
export default {
  components: { AppHeader, AppNavigation, AppFooter },
}
</script>