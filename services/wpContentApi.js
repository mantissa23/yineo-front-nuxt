/**
 * Get content from wordpress via REST Api
 */
const endpoint = process.env.wordpressApiBaseUrl
const axios = require('axios')

/**
 * @param {int} perPage : number of post to return per page
 * @param {int} pageNumber : current page to display
 * @param {int} tagId : filter posts by a tagId
 * 
 * @return {object}
 */
export const getPaginatedPosts = async (perPage = 10, pageNumber = 1, tagId = null) => {
  let url = endpoint + '/posts?per_page=' + perPage + '&page=' + pageNumber
  if (tagId) {
    url += `&tags=${tagId}`
  }
  const response = await axios.get(url)
  const result = {
    total: Number(response.headers['x-wp-total']),
    totalPages: Number(response.headers['x-wp-totalpages']),
    data: response.data
  }
  return result
}

export const getPosts = async (perPage = 10) => {
  const response = await axios.get(endpoint + '/posts?per_page=' + perPage)
  return response.data
}

export const getPostBySlug = async (slug) => {
  const {data} = await axios.get(endpoint + '/posts?_embed&slug=' + slug)
  return data[0]
}

export const getTagBySlug = async (slug) => {
  const {data} = await axios.get(endpoint + '/tags?slug=' + slug)
  return data[0]
}

