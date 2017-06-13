/**
 * Get content from wordpress via REST Api
 */
const endpoint = 'https://public-api.wordpress.com/wp/v2/sites/yineo.fr'
const axios = require('axios')

module.exports = {

  getPosts (perPage = 10) {
    return axios.get(endpoint + '/posts?_embed&per_page=' + perPage).then(response => response.data)
  },

  getPostBySlug (slug) {
    return axios.get(endpoint + '/posts?_embed&slug=' + slug).then(result => result.data[0])
  }

}
