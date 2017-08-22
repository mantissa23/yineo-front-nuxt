<!-- Short presentation about me -->
<template>
  <div class="presentation">
    
    <div class="columns">
      <div class="column">
        <PresentationColumnLeft />
      </div>
      <div class="column is-one-quarter">
        <PresentationColumnRight />
      </div>
    </div>

    <div class="section content">
      <h2 class="title is-3">Derniers articles</h2>
      <BulmaGrid :items="posts" itemsByRow="2">
        <template scope="row">
          <PostTeaser :post="row.item" />
        </template>
      </BulmaGrid>
    </div>
  </div>
</template>

<script>
import BulmaGrid from '~/components/BulmaGrid'
import PostTeaser from '~/components/PostTeaser'
import PresentationColumnLeft from '~/components/PresentationColumnLeft'
import PresentationColumnRight from '~/components/PresentationColumnRight'
export default {
  components: { BulmaGrid, PostTeaser, PresentationColumnLeft, PresentationColumnRight },
  props: {
    posts: { type: Array, default: () => [] }
  }
}
</script>
