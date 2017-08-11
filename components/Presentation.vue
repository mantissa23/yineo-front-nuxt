<!-- Short presentation about me -->
<template>
  <div>
    <section class="section">
  
      <div class="sub-section">
        <div class="columns">
          <div class="column">
            <h2 class="title is-2">A propos</h2>
            <p>Yann, développeur depuis 2009. J'ai commencé en tant que développeur PHP et je suis maintenant développeur full stack spécialisé pricipalement en
              <strong>JavaScript</strong> avec notamment
              <strong>Vue.js</strong>,
              <strong>Node</strong> et
              <strong>React</strong>. J'aide également à mettre place des solutions Drupal Headless avec Vue.js</p>
          </div>
          <div class="column is-one-third">
            <img id="photo" src="~assets/images/photo-small.jpg" />
          </div>
        </div>
      </div>
  
      <div class="sub-section">
        <h2 class="title is-2">Compétences</h2>
        <div class="tags">
          <span class="tag is-light is-medium" v-for="competence in competences">
            {{competence}}
          </span>
        </div>
      </div>
  
      <div class="sub-section">
        <h2 class="title is-2">Ils m'ont fait confiance</h2>
        <div>Radiofrance, France Inter, France 24, RFI</div>
      </div>
  
      <div class="sub-section">
        <h2 class="title is-2">Travaux personnels</h2>
        <ul>
          <li>
            <a href="http://eurl-app.fr"> http://eurl-app.fr</a> : Une calculette gratuite de charges sociales pour freelance :
          </li>
          <li>
            <a href="https://contentavuenuxt.github.io">https://contentavuenuxt.github.io</a> Le client Vue.js & Nuxt.js pour "Contenta CMS", la distribution Drupal 8 API-first
          </li>
        </ul>
      </div>
  
    </section>
  </div>
</template>

<script>
export default {
  props: {
    posts: { type: Array, default: () => [] }
  },
  data () {
    return {
      competences: [
        'JavaScript',
        'Vue.js',
        'Nuxt.js',
        'React.js',
        'Node.js',
        'PHP',
        'GraphQL',
        'MongoDB',
        'Bulma',
        'Foundation',
        'Bootstrap',
        'Drupal découplé',
        'Wordpress découplé',
        'Debian',
        'Scrum',
        'Webpack',
        'Lean start-up'
      ]
    }
  }
}
</script>

<style scoped>
#photo {
  height: 200px;
}

.sub-section {
  margin-bottom: 2rem;
}

ul {
  list-style-type: disc;
}
</style>
