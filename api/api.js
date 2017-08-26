/**
 * Get content from wordpress via REST Api
 */
const config = require('../nuxt.config.js')
import contentaJsonApi from './contentaJsonApi'
const api = contentaJsonApi(config.env.drupalUrl)

/**
 * @param {int} perPage : number of post to return per page
 * @param {int} pageNumber : current page to display
 * @param {int} tagId : filter posts by a tagId
 * 
 * @return {object}
 */
export const getPaginatedPosts = async (perPage = 10, pageNumber = 1, tagId = null) => {
  let url = api.get('node/article')
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

export const getPosts = (perPage = 10) => {
  const url ='node/article'
  return api.get(url)
  .then(r => r)
  .catch(e => console.log(`${url} ${e.message}`))
}

export const getPostBySlug = slug => {
  const url = 'node/article'
  // slug is uuid for now, so we can get post like that
  return api.get(url, {}, slug)
  .then(r => r )
  .catch(e => console.log(`${url} ${e.message}`))
}

export const getTagBySlug =  slug => {
  const url = `${endpoint}/tags?slug=${slug}`
  return axios.get(url)
  .then(r => r.data[0])
  .catch(e => console.log(`${url} ${e.message}`))
}
