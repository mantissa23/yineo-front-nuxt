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

    <div class="section content posts">
      <h2 class="title is-3">Derniers articles</h2>
      <BulmaGrid :items="posts" itemsByRow="2">
        <template scope="row">
          <PostTeaserHomepage :post="row.item" />
        </template>
      </BulmaGrid>
    </div>
  </div>
</template>

<script>
import BulmaGrid from './BulmaGrid'
import PostTeaserHomepage from './PostTeaserHomepage'
import PresentationColumnLeft from './PresentationColumnLeft'
import PresentationColumnRight from './PresentationColumnRight'
export default {
  components: { BulmaGrid, PostTeaserHomepage, PresentationColumnLeft, PresentationColumnRight },
  props: {
    posts: { type: Array, default: () => [] }
  }
}
</script>
