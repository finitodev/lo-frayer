const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Webpack configuration for the Amalton Chrome extension.
 *
 * This config builds a popup bundle from `src/index.tsx` and
 * copies the extension manifest to the `dist/` folder.  It also
 * processes Tailwind CSS via PostCSS and supports hot reloading
 * during development.
 */
module.exports = {
  entry: {
    popup: './src/index.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    // Generate the popup HTML file and inject the script
    new HtmlWebpackPlugin({
      template: './src/popup.html',
      filename: 'popup.html',
      chunks: ['popup'],
    }),
    // Copy the manifest into the dist folder
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/manifest.json', to: 'manifest.json' },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
