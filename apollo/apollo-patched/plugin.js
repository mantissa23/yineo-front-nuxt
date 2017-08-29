import Vue from 'vue'
import 'isomorphic-fetch'
import VueApollo from 'vue-apollo'
import { ApolloClient, createNetworkInterface } from 'apollo-client'

Vue.use(VueApollo)

export default ({ isClient, isServer, app, route, beforeNuxtRender, store }) => {

  const providerOptions = {
    clients: {}
  }

  <% Object.keys(options.networkInterfaces).forEach((key) => { %>
    let networkInterface = require('<%= options.networkInterfaces[key] %>')
    networkInterface = networkInterface.default || networkInterface
    const <%= key %>Client = new ApolloClient({
      networkInterface,
      ...(isServer ? {
        ssrMode: true
      } : {
        initialState: window.__NUXT__.apollo.<%= key === 'default' ? 'defaultClient' : key %>,
        ssrForceFetchDelay: 100
      })
    })
    <% if (key === 'default') { %>
      providerOptions.<%= key %>Client = <%= key %>Client
    <% } else { %>
      providerOptions.clients.<%= key %> = <%= key %>Client
    <% } %>

  <% }) %>


  app.apolloProvider = new VueApollo(providerOptions)

  if (isServer) {
    beforeNuxtRender(async ({ Components, nuxtState }) => {
      Components.forEach((Component) => {
      // Fix https://github.com/nuxt-community/apollo-module/issues/19
        if (Component.options && Component.options.apollo && Component.options.apollo.$init) {
          delete Component.options.apollo.$init
        }
      })
      await app.apolloProvider.prefetchAll({ route, store }, Components)
      nuxtState.apollo = app.apolloProvider.getStates()
    })
  }

}
