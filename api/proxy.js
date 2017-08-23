/**
 * Proxy to request wordpress.
 * all internal /api/xxx requests are handled by this file,
 * which pass requests then to Wordpress API.
 * This let us a chance to implement custom cache of our own.
 */
const cachios = require('cachios')
const axios = require('axios')
const express = require('express')
const router = express.Router()
const endpoint = 'https://public-api.wordpress.com/wp/v2/sites/yannboisselier.wordpress.com'

cachios.getResponseCopy =  response => {
  return {
    status: response.status,
    headers: response.headers,
    data: response.data
  }
}

// by default, just pass the request to Wordpress api and cache it with cachios
router.get('*', async (req, res) => {
  const url = endpoint + req.originalUrl.replace('/api', '')
  axios.get(url).then(r => {
    res.set('x-wp-total', r.headers['x-wp-total'])
    res.set('x-wp-totalpages', r.headers['x-wp-totalpages'])
    res.json(r.data)
  }).catch(e => res.send(url + ' ' + e.message))
})

router.get('/_cache', (req, res) => {
  res.send("posts route !")
});

module.exports = router
