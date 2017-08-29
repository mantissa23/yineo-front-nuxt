import { createNetworkInterface } from 'apollo-client'
export default createNetworkInterface({
  uri: process.env.drupalBaseUrl + '/graphql'
})