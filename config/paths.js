const path = require('path')

module.exports = {
  // src
  src: path.resolve(__dirname, '../src'),

  // dist
  build: path.resolve(__dirname, '../dist'),

  // static files
  public: path.resolve(__dirname, '../public'),
}
