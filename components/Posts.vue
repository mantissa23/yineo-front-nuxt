<!-- Liste des posts de blogs -->
<template>
  <div class="posts">
    <section>
      <div v-for="post in posts.data" class="post">
  
        <h2 v-html="post.title.rendered" class="title is-3"></h2>
        <div class="content" v-html="post.excerpt.rendered"></div>
        <div class="post__readmore">
          <nuxt-link class="button is-primary" :to="{ name: 'posts-slug', params: { slug: post.slug, post: post } }"> Lire l'article </nuxt-link>
          <!--
                          <div class="post__tags">
                            <ul>
                              <li v-for="tag in post._embedded['wp:term'][1]">
                                  {{tag.name}}
                                  <nuxt-link :to="{ name: 'tags-slug', params: { slug: tag.slug } }"> {{tag.name}} </nuxt-link>
                              </li>
                            </ul>
                    -->
        </div>
      </div>
  
    </section>

    <nav class="pagination">
      <ul class="pagination-list">
        <li v-for="n in posts.totalPages">
          <nuxt-link class="pagination-link" :to="{name:'posts', query:{ page: n }}">{{n}}</nuxt-link>
        </li>
      </ul>
    </nav>
  
  </div>
</template>

<script>
export default {
  props: ['posts']
}
</script>

<style scoped>
  .pagination-list {
    list-style-type: none
  }

</style>
