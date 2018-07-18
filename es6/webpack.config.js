const path = require('path');
//
module.exports = {
    mode: 'development',
    entry: ['./app/index.js'],
    output: {
        // to solve absolute dir name error during >>> npm run build
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
      rules : [
          {
              loader: 'babel-loader',
              // regex expression for catch all of JS file on project
              test: /\.js$/,
              // because of we have a lot of js file in node_module folder, we scape from test this folder
              exclude: /node_modules/
          }
      ]
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname + '/build'),
        // to enable automatically update the index.js file on server (web server)
        inline: true
    }
};