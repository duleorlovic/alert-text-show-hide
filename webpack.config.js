const config = {
  mode: 'development',
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'element_text.js',
    library: 'alertTextShowHide',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  }
}

module.exports = config

