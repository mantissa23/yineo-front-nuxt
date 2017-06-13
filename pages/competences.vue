<template>
  <section class="content cv">
     <timeline/>
  </section>
</template>

<script>
import timeline from '~/components/Timeline'
export default {
  transition: 'fade',
  components: {
    timeline
  }
}
</script>
