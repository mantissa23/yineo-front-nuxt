/**
 * Get content from wordpress via REST Api
 */
const endpoint = process.env.wordpressApiBaseUrl
const cachios = require('cachios')

cachios.getResponseCopy = function (response) {
  return {
    status: response.status,
    headers: response.headers,
    data: response.data
  }
}

export const getPaginatedPosts = async (perPage = 10, pageNumber = 1) => {
  const response = await cachios.get(endpoint + '/posts?per_page=' + perPage + '&page=' + pageNumber, {
    ttl: 3600
  })
  const result = {
    total: Number(response.headers['x-wp-total']),
    totalPages: Number(response.headers['x-wp-totalpages']),
    data: response.data
  }
  return result
}

export const getPosts = async (perPage = 10) => {
  const response = await cachios.get(endpoint + '/posts?per_page=' + perPage, {
    ttl: 3600
  })
  return response.data
}

export const getPostBySlug = async (slug) => {
  const {data} = await cachios.get(endpoint + '/posts?_embed&slug=' + slug, {
    ttl: 0
  })
  return data[0]
}

export const getTagBySlug = async (slug) => {
  const {data} = await cachios.get(endpoint + '/tags?slug=' + slug, {
    ttl: 0
  })
  return data[0]
}

export const getPaginatedPostsByTagId = async (perPage = 10, pageNumber = 1, tagId) => {
  const response = await cachios.get(endpoint + '/posts?per_page=' + perPage + '&page=' + pageNumber + '&tags=' + tagId, {
    ttl: 3600
  })
  const result = {
    total: Number(response.headers['x-wp-total']),
    totalPages: Number(response.headers['x-wp-totalpages']),
    data: response.data
  }
  return result
}
