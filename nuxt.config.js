/**
 * Generate routes like ""/posts/xxxxx" so that nuxtjs can generate them
 */
module.exports = {

  plugins: [
    '~/plugins/app', 
    { src: '~/plugins/google-analytics', ssr: false }
  ],
  env: {
    siteBaseUrl: 'http://yineo.fr',
    wordpressApiBaseUrl: 'https://public-api.wordpress.com/wp/v2/sites/yannboisselier.wordpress.com'
  },
  router: {
    middleware: ['redirect-old-uris']
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Yineo - développement Vue.js, React, Node et JavaScript',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'YINEO - développeur freelance à Nantes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/bulma-0.5.0.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/app.css' },
    ],
    script: [
      //  {  type: 'text/javascript', src: '/js/highlight.pack.js' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
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
