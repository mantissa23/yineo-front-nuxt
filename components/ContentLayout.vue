<!-- Layout component for content zone -->
<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <slot name="content">pas de contenu trouvé</slot>
      </div>
      <div class="column">
        <section class="section">
          <slot name="sidebar"></slot>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter'
import AppNavigation from '~/components/AppNavigation'

export default {
  components: { AppFooter, AppHeader, AppNavigation }
}
</script>
