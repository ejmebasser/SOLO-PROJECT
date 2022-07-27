const path = require('path');
//require is node techinically
const HtmlWebpackPlugin = require('html-webpack-plugin');
//this will package and load my html

module.exports = {
  mode: process.env.NODE_ENV, //this mode sets either development or production. but since we are using process.env.node.env is a variable that we use in our scripts and we can run dev, build, or server. and we can send it to our host site.
  entry: './client/index.js', //entry point of where we enter our app.
  output: {
    //this is from production. this is where all the code goes when its done and built.
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  devServer: {
    //this is all the rules and properties for our dev server envoirnment. Statis for satic files.
    static: {
      directory: path.join(__dirname, 'build'),
      publicPath: '/build',
    },

    proxy: {
      //this is the you can run dev envoirnment for your front end and backend. Can do callbacks and redirects from your local host 3000, this acts as an intermediary server. this allows us to have our server and our front end host combined.
      '/api': 'http://localhost:3000',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      //this is required.
      title: 'Development',
      template: '/index.html',
    }),
    //new MiniCSSExtractPlugin(), //this packages all your style code. if we use the style laoders, this is irrevelent.
  ],
  module: {
    //the ruels for searching through files. test for all JSX files or JS files. exclude all the node modules.
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', //we can have an envoirnment. and we can package up code.
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'], //look for all the css files an sass files looking for style tags, then css tags, then sass tag.
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], //this resovles all the diferent extensions. this is a convienace more than anything.
  },
};
