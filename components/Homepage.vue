<template>
  <div class="container">
    <div class="columns">
  
      <div class="column is-two-thirds">
  
        <section class="section">
  
          <div class="sub-section">
            <div class="columns">
              <div class="column is-one-third">
                <img id="photo" src="~assets/images/photo-small.jpg" />
              </div>
              <div class="column">
                <p>Yann, développeur freelance fullStack, 8 ans d'expérience. J'ai commencé en tant que développeur PHP et je suis maintenant développeur
                  <strong>JavaScript</strong> spécialisé pricipalement en
                  <strong>Vue.js</strong>,
                  <strong>Node</strong> et
                  <strong>React</strong>. Je met également en place des solutions CMS découplés avec Drupal 8 ou Wordpress.</p>
              </div>
            </div>
          </div>
  
          <div class="sub-section">
            <h2 class="title is-4">Compétences</h2>
            <div class="tags">
              <span class="tag is-primary is-medium" v-for="competence in competences">
                {{competence}}
              </span>
            </div>
          </div>
  
          <div class="sub-section">
            <h2 class="title is-4">Ils m'ont fait confiance</h2>
            <div>Radiofrance, France Inter, France 24, RFI</div>
          </div>
  
          <div class="sub-section">
            <h2 class="title is-4">Projets personnels</h2>
            <ul>
              <li>Une calculette gratuite de charges sociales pour freelance :
                <a href="http://eurl-app.fr"> http://eurl-app.fr</a>
              </li>
              <li>Un client Vue.js & Nuxt.js pour "Contenta", la distribution Drupal API-first
                <a href="https://contentavuenuxt.github.io">https://contentavuenuxt.github.io</a>
              </li>
            </ul>
          </div>
  
        </section>
  
      </div>
      <!-- /.column -->
  
      <div class="column is-one-third">
        <section class="section">
          <h3 class="title is-3">Derniers articles</h3>
          <PostsHomepage :posts="posts" />
        </section>
      </div>
      <!-- /.column -->
  
    </div>
    <!-- /.columns -->
  </div>
</template>

<script>
import PostsHomepage from '~/components/PostsHomepage'
export default {
  props: {
    posts: { type: Array, default: [] }
  },
  components: { PostsHomepage },
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
  height: 200px
}

.sub-section {
  margin-bottom: 2rem;
}
</style>
