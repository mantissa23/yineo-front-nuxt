<template>
  <section class="home">
    <div class="container">
      Développeur depuis 2009 et freelance depuis 2012, j’ai participé à la réalisation d’une cinquantaine de sites parmi lesquels ceux de grand médias français ( France Inter, RFI, France 24 ). J’ai commencé en tant que développeur PHP mais en 2015 je me suis tourné vers les nouvelles technologies en JavaScript et je suis désormais développeur full stack JS avec Nodejs, Angular ou Vue.js.

Depuis 2016, j’exerce mon activité de développeur freelance à Nantes.

    </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'
import Timeline from '~components/Timeline.vue'
import Navigation from '~components/Navigation.vue'

export default {
  transition: 'fade',
  //  layout: 'home',
  components: {
    Logo,
    Navigation,
    Timeline
  }
}
</script>

