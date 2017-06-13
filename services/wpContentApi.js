/**
 * Get content from wordpress via REST Api
 */
const endpoint = 'https://public-api.wordpress.com/wp/v2/sites/yineo.fr'
const axios = require('axios')

const getPosts = async (perPage = 10) => {
  const { data } = await axios.get(endpoint + '/posts?_embed&per_page=' + perPage)
  return data
}

const getPostBySlug = async (slug) => {
  const {data} = await axios.get(endpoint + '/posts?_embed&slug=' + slug)
  return data[0]
}

export {
  getPosts,
  getPostBySlug
}
