const isProd = process.env.NODE_ENV === 'production'
console.log({isProd})

const withImages = require('next-images')

module.exports = withImages({
  target: 'serverless',
  assetPrefix: isProd ? '/_assets' : ''
})
