<template>
  <footer class="footer">
    <div class="container">
      <div class="powered-by has-text-centered">
        <em>Ce site est propulsé par : </em>
      </div>
      <div class="columns has-text-centered">
        <div class="column">
          <div class="logo-image-wrapper">
            <img class="logo-image" src="~assets/images/logo-wordpress.png" />
          </div>
          <div class="logo-title"><a href="https://wordpress.com/">Wordpress.com</a></div>
          <div class="logo-description">Back-office & REST API</div>
        </div>
  
        <div class="column">
          <div class="logo-image-wrapper">
            <img class="logo-image" src="~assets/images/logo-vuejs.png" />
          </div>
          <div class="logo-title"><a href="https://vuejs.org/">Vue.js</a></div>
          <div class="logo-description">Front-end</div>
        </div>
  
        <div class="column">
          <div class="logo-image-wrapper">
            <img class="logo-image" src="~assets/images/logo-bulma.png" />
          </div>
          <div class="logo-title"><a href="http://bulma.io/">Bulma</a></div>
          <div class="logo-description">Framework CSS</div>
        </div>
  
        <div class="column">
          <div class="logo-image-wrapper">
            <img class="logo-image" src="~assets/images/logo-nuxt.png" />
          </div>
          <div class="logo-title"><a href="https://nuxtjs.org/">Nuxt.js</a></div>
          <div class="logo-description">Universal Vue.js Applications</div>
        </div>
  
      </div>
  
    </div>
  </footer>
</template>

<style scoped>
.logo-title {
  font-weight: bold;
  margin: auto;
  text-transform: uppercase;
}

.logo-image-wrapper {
  height: 100px
}

.logo-image {
  max-height: 100px
}

.powered-by {
  margin-bottom: 2rem;
}
</style>
