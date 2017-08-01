/**
 * Get content from wordpress via REST Api
 */
const endpoint = process.env.wordpressApiBaseUrl
const axios = require('axios')

export const getPosts = async (perPage = 10, pageNumber = 1) => {
  const response = await axios.get(endpoint + '/posts?per_page=' + perPage + '&page=' + pageNumber)
  const result = {
    total: Number(response.headers['x-wp-total']),
    totalPages: Number(response.headers['x-wp-totalpages']),
    data: response.data
  }
  return result
}

export const getPostBySlug = async (slug) => {
  const {data} = await axios.get(endpoint + '/posts?_embed&slug=' + slug)
  return data[0]
}
