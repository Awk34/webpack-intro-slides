# Loaders

Loaders are file preprocessors. They allow the customization of how any static resource is bundled into your code.

### Examples

- [raw-loader](https://webpack.js.org/loaders/raw-loader) Loads raw content of a file (utf-8)
- [file-loader](https://webpack.js.org/loaders/file-loader) Emits the file into the output folder and returns the (relative) URL
- [babel-loader](https://webpack.js.org/loaders/babel-loader) Loads ES2015+ code and transpiles it using Babel
- [ts-loader](https://github.com/TypeStrong/ts-loader) / [awesome-typescript-loader](https://github.com/s-panferov/awesome-typescript-loader) Loads TypeScript 2.0+ like JavaScript
- [html-loader](https://webpack.js.org/loaders/html-loader) Exports HTML as string, require references to static resources
- [css-loader](https://webpack.js.org/loaders/css-loader) Loads CSS file with resolved imports and returns CSS code
- [style-loader](https://webpack.js.org/loaders/style-loader) Add exports of a module as style to DOM
- [eslint-loader](https://github.com/MoOx/eslint-loader) PreLoader for linting code using ESLint

---

## Using the Babel Loader

```bash
$ npm install --save-dev babel-loader babel-core babel-preset-env
```

#### `webpack.config.js`
```diff
{
  ...
+ module: {
+     rules: [{
+         test: /\.js$/,
+         exclude: /node_modules/,
+         use: 'babel-loader',
+     }]
+ },
  ...
}
```

+++

#### `.babelrc`
```json
{
  "presets": [
    [ "env", {
      "browsers": ["last 2 versions", "safari >= 7"],
      "modules": false,
      "useBuiltIns": true,
      "debug": false
    }]
  ]
}
```

Temporarily set `debug` to `true`

```bash
$ npm run build
```

---

## Adding Sass

```bash
$ npm install --save-dev style-loader css-loader sass-loader node-sass
```

```diff
{
  ...
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
+     }, {
+         test: /\.scss$/,
+         use: ['style-loader', 'css-loader', 'sass-loader'],
      }]
  },
  ...
}
```

+++

#### `app.scss`
```scss
body {
  div {
    font-size: 2rem;
    font-weight: bold;
    font-family: sans-serif;
  }
}
```

#### `app.js`
```diff
import join from 'lodash-es/join';
+
+ import './app.scss';
...
```

```bash
$ npm run build
```
