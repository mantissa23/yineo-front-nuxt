<template>
  <bulma-grid :items="posts" itemsByRow="2">
    <template scope="row">
      <PostTeaser :post="row.item" />
    </template>
  </bulma-grid>
</template>

<script>
import BulmaGrid from '~/components/BulmaGrid'
import PostTeaser from '~/components/PostTeaser'
export default {
  props: {
     posts: { type: Array, default: () => [] }
  },
  components: { BulmaGrid, PostTeaser }
}
</script>
