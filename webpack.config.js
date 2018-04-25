const config = {
  mode: 'development',
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'element_message.js',
    library: 'alertMessageShowHide',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  }
}

module.exports = config

