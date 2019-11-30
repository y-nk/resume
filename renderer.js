const fetch = require('cross-fetch')
require('browser-env')()

window.fetch = resource => {
  try {
    const file = require(`./public${resource}`)

    return Promise.resolve()
      .then(() => ({ json: () => file }))
  }
  catch(e) {
    return fetch(resource)
  }
}

const { createBundleRenderer } = require('vue-server-renderer')

const { resolve } = require('path')
const rel = res => resolve(`${__dirname}/`, res)

const index = require('fs').readFileSync(rel('./src/index.html'), 'utf-8')

const manifest = require(rel('./dist/client-manifest.json'))
const bundle = require(rel('./dist/server-bundle.json'))

const renderer = createBundleRenderer(bundle, {
  runInNewContext: false,

  template: index,
  clientManifest: manifest
})

module.exports = url => new Promise((resolve, reject) => {
  renderer.renderToString({ url }, (err, html) => {
    if (err)
      reject(err)
    else
      resolve(html)
  })
})

// ------------------------------------

const args = process.argv.slice(2)

if (args.length > 0)
  module.exports(args.shift())
    .then(html => {
      console.log(html)
      process.exit(0)
    })
    .catch(err => {
      console.error(err)
      process.exit(1)
    })
