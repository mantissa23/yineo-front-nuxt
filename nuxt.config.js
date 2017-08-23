module.exports = {
  env: {
    wordpressApiBaseUrl: 'https://public-api.wordpress.com/wp/v2/sites/yannboisselier.wordpress.com',
    // use https on prod, http on local
    proxyApiBaseUrl: process.env.NODE_ENV == 'production' ? 'https://localhost:3000/api' : 'http://localhost:3000/api'
  },
  plugins: [
    '~/plugins/app',
    '~/plugins/hydrate-layout-data',
    { src: '~/plugins/google-analytics', ssr: false }
  ],
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
      { name: 'google-site-verification', content: 'YgD-3ccRebKxZ-IAL0a89Dh2B6k2s4LVUGcWtseLTmw' },
      { hid: 'description', name: 'description', content: 'YINEO - développeur freelance à Nantes' }
    ],
    link: [
      { rel: 'stylesheet', href: '/css/bulma-5.1.css' },
      { rel: 'stylesheet', href: '/css/app.css' }
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
    vendor: ['axios', '~/api/api'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {

      // disable uglify, does not support ES6 
      config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')

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
