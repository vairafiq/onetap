const common    = require("./webpack.common");
const { merge } = require('webpack-merge');

const MiniCssExtractPlugin   = require("mini-css-extract-plugin");
const WebpackRTLPlugin       = require("webpack-rtl-plugin");
const FileManagerPlugin      = require('filemanager-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: "production", // production | development
  watch: false,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/[name].min.css",
    }),
    new WebpackRTLPlugin({
      filename: "../css/[name].rtl.min.css",
      minify: true,
    }),
    new CleanWebpackPlugin({
      dry: false,
      cleanOnceBeforeBuildPatterns: [ '../css/*.map', '../js/*.map' ],
      dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
    new FileManagerPlugin({
      events: {
        onEnd: [
          {
            copy: [
              { source: './app', destination: './__build/onetap/onetap/app' },
              { source: './assets', destination: './__build/onetap/onetap/assets' },
              { source: './helper', destination: './__build/onetap/onetap/helper' },
              { source: './languages', destination: './__build/onetap/onetap/languages' },
              { source: './vendor', destination: './__build/onetap/onetap/vendor' },
              { source: './view', destination: './__build/onetap/onetap/view' },
              { source: './*.php', destination: './__build/onetap/onetap' },
              { source: './*.txt', destination: './__build/onetap/onetap' },
            ],
          },
          {
            archive: [
              { source: './__build/onetap', destination: './__build/onetap.zip' },
            ],
          },
          {
            delete: ['./__build/onetap'],
          },
        ],
      },
    }),
  ],
  optimization: {
    minimize: true,
  },
  output: {
    filename: "../js/[name].min.js",
  },
});