import { createNetworkInterface } from 'apollo-client'
export default (context) => {
  const networkInterface = createNetworkInterface({
    uri: process.env.drupalBaseUrl + '/graphql'
  })
  return networkInterface
}
