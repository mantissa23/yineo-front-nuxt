<template>
  <section class="home">
    <div class="container">

    </div>
    <!--<valeurs/>-->
    <timeline/>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'
import Timeline from '~components/Timeline.vue'
import Navigation from '~components/Navigation.vue'
import Valeurs from '~components/Valeurs.vue'

export default {
  transition: 'fade',
  components: {
    Logo,
    Navigation,
    Timeline,
    Valeurs
  }
}
</script>

