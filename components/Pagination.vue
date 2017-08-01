<template>
  <nav class="pagination is-centered">
    <ul class="pagination-list">
      <li v-for="n in totalPages">
        <nuxt-link class="pagination-link" :to="{ name: getRouteName, query:{ page: n } }">{{ n }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    totalPages: { type: Number, default: 0 }
  },
  data () {
    return {
      routeName: { type: String, default: '' }
    }
  },
  computed: {
    getRouteName () {
      return this.$route.name
    }
  }
}
</script>
