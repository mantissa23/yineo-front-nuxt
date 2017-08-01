<template>
  <section class="container content post">
    <h1 class="title is-3" v-html="post.title.rendered"></h1>
    <!--
    <div class="date">écrit le {{post.date}}</div>
    <div class="date">édité le {{post.modified}}</div>
    -->
    <div class="featured-media"><img src="https://yannboisselier.files.wordpress.com/2017/07/capture-d_ecc81cran-2017-07-25-acc80-10-51-18.png"/></div>
    <div v-html="post.content.rendered" class="content"></div>
    <div v-if="post._embedded['wp:term'][1]" class="">
      <ul>
        <li class="tag" v-for="tag in post._embedded['wp:term'][1]">
          {{tag.name}}
          <!--<nuxt-link :to="{ name: 'tags-slug', params: { slug: tag.slug } }"> {{tag.name}} </nuxt-link>-->
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    post: { type: Object, default: {} }
  }
}
</script>
