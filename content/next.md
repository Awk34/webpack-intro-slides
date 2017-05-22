## What next?

---

## Webpack Dev Server

- https://github.com/webpack/webpack-dev-server
- Easy to integrate
- Runs in-memory
- Live-reloading / Hot-reloading (with [React hot loader](https://github.com/gaearon/react-hot-loader))

---

## Source Maps

```js
module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devtool: 'source-map',
};
```

---

## Mutliple Entry Points

Create a bundle for vendor files, and another for your code.
If you don't change vendor files often, there's a much greater chance of it being cached.

---

## Plugins

- [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) Ex. extract CSS out into it's own bundle
- [CommonsChunkPlugin](https://webpack.js.org/plugins/commons-chunk-plugin/) Creates a separate bundle, consisting of common modules shared between multiple entry points
- [UglifyjsWebpackPlugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/) ES5 minifier
- [BabiliWebpackPlugin](https://webpack.js.org/plugins/babili-webpack-plugin/) ES6+ minifier, uses Babel

---

## Tree Shaking

- https://webpack.js.org/guides/tree-shaking
- Tree shaking is a term commonly used in the JavaScript context for dead-code elimination, or more precisely, live-code import. It relies on ES2015 module import/export for the static structure of its module system.

---

## Questions?
