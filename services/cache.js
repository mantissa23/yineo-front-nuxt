const cachios = require('cachios')

module.exports = {
  path: '/cache-api/blog',
  handler: (req, res, next) => {
    console.log(req.path)
    cachios.get('https://public-api.wordpress.com/wp/v2/sites/yannboisselier.wordpress.com/posts').then(r => {
      res.end(JSON.stringify(r.data))
    }).catch(e => res.end(e.message))
  }
}
