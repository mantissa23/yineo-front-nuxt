<template>
  <section class="header">
    <div>
      <h1 class="title"> YINEO </h1>
      <h2 class="subtitle">
        NinjavaScript&trade;
      </h2>
      <navigation />
    </div>
  </section>
</template>

<script>
import navigation from '~/components/Navigation.vue'
export default {
  methods: {
    display: () => {
      return true
    }
  },
  components: {
    navigation
  }
}
</script>
