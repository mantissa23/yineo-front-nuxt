/**
 * Get content from wordpress via REST Api
 */
const config = require('../nuxt.config.js')
import contentaJsonApiClient from './contentaJsonApiClient'
const api = contentaJsonApiClient(config.env.drupalUrl)

/**
 * @param {int} limit : number of post to return per page
 * @param {int} pageNumber : current page to display
 * @param {int} tagId : filter posts by a tagId
 * 
 * @return {object}
 */
export const getPaginatedPosts = async (limit = 10, pageNumber = 1, tagId = null) => {
  const query = {
    page: {
      limit
    }
  }
  let url = 'node/article'
  if (tagId) {
    url += `&tags=${tagId}`
  }
  return api.get(url, query)
    .then(r => r)
    .catch(e => console.log(`${url} ${e.message}`))
}

export const getPosts = (limit = 10) => {
  const url = 'node/article'
  const query = {
    include: 'field_tags',
    page: {
      limit
    }
  }
  return api.get(url, query)
    .then(r => r.data)
    .catch(e => console.log(`${url} ${e.message}`))
}

export const getPostBySlug = slug => {
  const query = {
    include: 'field_tags',
    filter:{
      slug: {
        value: slug
      }
    }
  }
  const url = 'node/article'
  // slug is uuid for now, so we can get post like that
  return api.get(url, query)
    .then(r => r.data[0])
    .catch(e => console.log(`${url} ${e.message}`))
}

export const getTagBySlug = slug => {
  const url = `${endpoint}/tags?slug=${slug}`
  return axios.get(url)
    .then(r => r.data[0])
    .catch(e => console.log(`${url} ${e.message}`))
}
