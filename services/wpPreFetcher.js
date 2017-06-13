const fse = require('fs-extra')
const endpoint = 'https://public-api.wordpress.com/wp/v2/sites/yineo.fr'
const axios = require('axios')
const cacheDir = "../static/cache/json"

const content = require('./wpContentApi')

const fetchUrsl = [
    endpoint + '/posts?_embed&per_page=20'
]

async function run() {
    for (const url of fetchUrsl) {
        const response = await axios.get(url)
        const filename = encodeURIComponent(response.config.url)
        await fse.writeFile(cacheDir + '/posts[test].json', JSON.stringify(response.data))
        const test = require(cacheDir + '/posts[test].json')
        console.log(test)
    }
}

run()



