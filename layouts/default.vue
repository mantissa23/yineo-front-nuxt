<template>
  <transition name="fade">
    <div>
      <div class="container header">
        <logo/>
        <appheader/>
      </div>
      <nuxt/>
    </div>
  </transition>
</template>

<script>
import appheader from '~/components/AppHeader.vue'
import logo from '~/components/Logo.vue'

export default {
  components: {
    appheader,
    logo
  }
}
</script>
