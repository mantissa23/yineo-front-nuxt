<!-- Liste des posts de blogs -->
<template>
  <section class="posts">
    <div v-for="post in posts" class="post">
  
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
    </div>
  </section>
</template>

<script>

export default {
  props: ['posts']
}
</script>
