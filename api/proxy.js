/**
 * Proxy to request wordpress.
 * all internal /api/xxx requests are handled by this file,
 * which pass requests then to Wordpress API.
 * This let us a chance to implement custom cache of our own.
 */
const express = require('express')
const axios = require('axios')
const router = express.Router()
const endpoint = 'https://public-api.wordpress.com/wp/v2/sites/yannboisselier.wordpress.com'

// by default, just pass the request to Wordpress api
router.get('*', async (req, res) => {
  const url = endpoint + req.originalUrl.replace('/api', '')
  axios.get(url).then(r => {
    res.json(r.data)
  }).catch(e => res.send(url + ' ' + e.message))
})

/*
router.get('/posts', (req, res) => {
  res.send("posts route !")
});
*/

module.exports = router


