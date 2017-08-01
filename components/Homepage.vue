<template>
  <div class="container">
    <div class="has-text-centered">
  
      <section class="section">
        <img id="photo" src="~assets/images/photo-small.jpg" />
        <h2 class="title is-2"> A propos </h2>
        <p>Développeur fullStack, 8 ans d'expérience, freelance depuis 2012</p>
      </section>
  
      <section class="section">
        <h2 class="title is-2">Compétences</h2>
        <div class="tags">
          <span class="tag is-primary is-medium" v-for="competence in competences">
            {{competence}}
          </span>
        </div>
      </section>
  
      <section class="section">
        <h2 class="title is-2">Ils m'ont fait confiance</h2>
        <div>Radiofrance, France Inter, France 24, RFI</div>
      </section>
  
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      competences: ['JavaScript', 'Vue.js', 'Nuxt.js', 'React.js', 'Node.js', 'PHP', 'GraphQL', 'MongoDB', 'Bulma', 'Foundation', 'Bootstrap', 'Drupal découplé', 'Wordpress découplé', 'Debian', 'Scrum', 'Lean start-up']
    }
  }
}
</script>

<style scoped>
#photo {
  height: 200px
}
</style>
