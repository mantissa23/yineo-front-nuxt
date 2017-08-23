/**
 * Get content from wordpress via REST Api
 */
const config = require('../nuxt.config.js')
const axios = require('axios')
const endpoint = config.env.proxyApiBaseUrl

/**
 * @param {int} perPage : number of post to return per page
 * @param {int} pageNumber : current page to display
 * @param {int} tagId : filter posts by a tagId
 * 
 * @return {object}
 */
export const getPaginatedPosts = async (perPage = 10, pageNumber = 1, tagId = null) => {
  let url = `${endpoint}/posts?per_page=${perPage}&page=${pageNumber}`
  if (tagId) {
    url += `&tags=${tagId}`
  }
  return axios.get(url)
    .then(response => {
      const result = {
        total: Number(response.headers['x-wp-total']),
        totalPages: Number(response.headers['x-wp-totalpages']),
        data: response.data
      }
      return result
    })
    .catch(e => console.log(`${url} ${e.message}`))
}

export const getPosts = async (perPage = 10) => {
  const url = `${endpoint}/posts?per_page=${perPage}`
  return axios.get(url)
  .then(r => r.dara)
  .catch(e => console.log(`${url} ${e.message}`))
}

export const getPostBySlug = async (slug) => {
  const url = `${endpoint}/posts?_embed&slug=${slug}`
  return axios.get(url)
  .then(r => r.data[0] )
  .catch(e => console.log(`${url} ${e.message}`))
}

export const getTagBySlug = async (slug) => {
  const url = `${endpoint}/tags?slug=${slug}`
  return axios.get(url)
  .then(r => r.data[0])
  .catch(e => console.log(`${url} ${e.message}`))
}
