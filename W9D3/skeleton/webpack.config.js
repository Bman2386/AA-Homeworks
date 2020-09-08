var path = require('path');
module.exports = {
  entry: {
    app: ["./js/main.js"]
  },
  output: {
    path: path.join(__dirname, 'js'),
    publicPath: '/js/',
    filename: 'bundle.js',
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  devtool: 'source-maps',
};
//this is hw from last night

// ok sec

// bro right side ok type control + f1 that should pop up search for settings then there type "select default terminal"
// then u should choose git bash and re install webpack with new terminal "dont forget to terminate old one and open new one"