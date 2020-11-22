const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '',
  },

  plugins: [
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
          to: 'assets',
        }
      ],
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack 5 Base',
      favicon: './src/images/favicon.png',
      template: './src/template.html',
      filename: 'index.html',
    }),

    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],

  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},

      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {sourceMap: true, importLoaders: 1}},
          {loader: 'postcss-loader', options: {sourceMap: true}},
          {loader: 'sass-loader', options: {sourceMap: true}},
        ],
      },

      // {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},

      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets',
              name:'[name][hash].[ext]', 
            }
          }
        ]
      },

      {test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline'},
    ],
  },
}