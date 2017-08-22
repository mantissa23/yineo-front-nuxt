/**
 * Generate routes like ""/posts/xxxxx" so that nuxtjs can generate them
 */
module.exports = {

  plugins: [
    '~/plugins/app',
    '~/plugins/hydrate-layout-data',
    { src: '~/plugins/google-analytics', ssr: false }
  ],
  env: {
    siteBaseUrl: 'http://yineo.fr',
    wordpressApiBaseUrl: 'https://public-api.wordpress.com/wp/v2/sites/yannboisselier.wordpress.com'
  },
  router: {
    middleware: ['redirect-old-uris']
  },
  css: [
    '@/assets/css/app.scss'
  ],

  /*
  ** Headers of the page
  */
  head: {
    title: 'Yineo - développement Vue.js, React, Node et JavaScript',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'YgD-3ccRebKxZ-IAL0a89Dh2B6k2s4LVUGcWtseLTmw' },
      { hid: 'description', name: 'description', content: 'YINEO - développeur freelance à Nantes' }
    ],
    link: [
      { rel: 'stylesheet', href: '/css/app.css' }
    ],
    script: [
      //  {  type: 'text/javascript', src: '/js/highlight.pack.js' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#a3001f' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', './services/wpContentApi'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
