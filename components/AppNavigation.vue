<template>
  <div class="container">
    <nav class="navbar">
      <div class="navbar-brand">

        <span class="navbar-item is-hidden-desktop">
          <img alt="Logo Yineo" src="~/assets/src/Yineo_logo_mobile.svg" class="logo-mobile" />
        </span>

        <div @click="setMenuMobileIsOpened" :class="{'is-active': this.$store.state.menuMobileIsOpened}" class="navbar-burger" data-target="app-menu">
          <img alt="Logo Yineo" src="~/assets/src/Yineo_burger.svg" class="yineo-burger" />

        </div>

      </div>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div id="app-menu" class="navbar-menu" :class="{'is-active': this.$store.state.menuMobileIsOpened}">
        <div class="navbar-end">
          <nuxt-link to="/" class="navbar-item"> Home </nuxt-link>
          <nuxt-link to="/blog" class="navbar-item"> Blog </nuxt-link>
          <nuxt-link to="/contact" class="navbar-item"> Contact </nuxt-link>
        </div>
      </div>

    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    setMenuMobileIsOpened () {
      console.log(this.$store.state)
      this.$store.commit('setMenuMobileIsOpened', !this.$store.state.menuMobileIsOpened)
    }
  }
}
</script>

<style scoped>
.navbar-menu {
  border-style: solid;
  border-color: hsl(0, 0%, 98%);
  border-width: thin 0;
}

.navbar-end {
  margin: auto !important;
}


/* Create slide animation on mobile */

@media screen and (max-width: 1007px) {

  .navbar-item img {
    height: 2.75rem;
    max-height: 2.75rem;
  }

  .navbar-burger {
    cursor: pointer;
    display: block;
    height: 4rem;
    position: relative;
    width: 3.25rem;
    margin-left: auto;
  }

  .navbar-burger img {
    height: 2rem;
    margin: 1.25rem 0 0 .6rem;
  }

  .navbar-end {
    padding: 0.5rem 1rem;
  }

  .navbar-menu {
    display: block;
    overflow: hidden;
    max-height: 0;
    padding: 0 1rem;
    transition: max-height 0.2s;
  }

  .navbar-menu.is-active {
    max-height: 100vh;
    transition: max-height 0.5s;
  }
}

.navbar-item {
  font-size: 1rem;
  padding: 1rem 2rem;
}

.nuxt-link-exact-active {
  color: #363636;
}
</style>
