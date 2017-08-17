<!-- Short presentation about me -->
<template>
  
  <div class="columns">
    <div class="column">
      
      <section class="hero section">
        <div class="hero-body">
          
          <h1 class="title is-1">
            Yann Boisselier
          
          </h1>
          <h2 class="subtitle is-3">
            Développeur <span class="is-red">freelance</span> à Nantes.<br>
          </h2>
        
        </div>
      </section>
      <section class="content is-medium">
        <blockquote>
          
          
          Je m'appelle Yann, développeur Web depuis 2009, spécialisé dans les technologies <strong>JavaScript</strong>
          telles que
          
          <strong>Vue.js</strong>,
          <strong>Nuxt.js</strong>,
          <strong>React</strong>,
          <strong>Next.js</strong>,
          <strong>Node</strong>,
          <strong>Angular</strong> et
          <strong>GraphQL</strong>
          <br>
        </blockquote>
      </section>
      
      <section class="section content">
        <h2 class="title is-3">Travaux personnels</h2>
        <ul>
          <li>
            <a href="http://eurl-app.fr"> http://eurl-app.fr</a>
            : Une calculette gratuite de charges sociales pour freelance :
          </li>
          <li>
            <a href="https://contentavuenuxt.github.io">https://contentavuenuxt.github.io</a>
            Le client Vue.js & Nuxt.js pour "Contenta CMS", la distribution Drupal 8 API-first
          </li>
        </ul>
      </section>
    
    </div>
    <div class="column is-one-quarter">
      <section class="section has-text-centered">
        <img class="photo" src="~/assets/images/photo-square.jpg" />
        
        <h2 class="title is-4">
          Ils m'ont fait confiance
        </h2>
        <ul class="clients">
          <li>
            <img src="~/assets/images/France_24_logo.svg"
                 class="client-logo"
                 alt="France 24"
                 title="France 24" />
          </li>
          <li>
            <img src="~/assets/images/France_inter_logo.svg"
                 class="client-logo"
                 alt="France Inter"
                 title="France Inter" />
          </li>
          <li>
            <img src="~/assets/images/Radio_France_logo.svg"
                 class="client-logo"
                 alt="Radio France"
                 title="Radio France" />
          </li>
          <li>
            <img src="~/assets/images/RFI_logo.svg"
                 class="client-logo"
                 alt="rfi"
                 title="rfi" />
          </li>
        </ul>
      </section>
    </div>
  </div>

</template>


<style lang="scss" scoped>
  
  @import "../assets/css/app.scss";
  
  .photo {
    max-height    : 300px;
    border        : 10px solid $white;
    border-radius : 10rem;
    box-shadow    : 2px 2px 15px rgba(0, 0, 0, 0.15);
    margin-bottom : 2rem;
  }
  
  .clients {
    list-style     : none;
    display        : flex;
    flex-direction : row;
    
    > li {
      flex-direction : row;
    }
  }
  
  .client-logo {
    max-width : 60px;
    margin    : .5rem;
  }

</style>
