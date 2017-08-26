<template>
  <bulma-grid :items="posts" itemsByRow="2">
    <template scope="row">
      <PostTeaserHomepage :post="row.item" />
    </template>
  </bulma-grid>
</template>

<script>
import BulmaGrid from '~/components/BulmaGrid'
import PostTeaserHomepage from '~/components/PostTeaserHomepage'
export default {
  props: {
     posts: { type: Array, default: () => [] }
  },
  components: { BulmaGrid, PostTeaserHomepage }
}
</script>
