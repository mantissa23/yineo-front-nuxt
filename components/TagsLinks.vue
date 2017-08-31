<!-- Post list as teasers -->
<template>
  <div class="tags">
    <ul>
      <li class="tag is-medium is-light" v-for="tag in tags">
        <nuxt-link :to="{ name: 'tag-slug', params: { slug: tag.url.alias.replace('/', '') } }"> {{tag.name}} </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    tags: { type: Array, default: [] }
  }
}
</script>
