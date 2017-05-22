## The basic Webpack setup

```bash
$ mkdir myapp && cd $_
$ git init
$ npm init -y
```

+++

#### `app.js`

```js
function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

#### `index.html`

```html
<html>
  <head>
    <title>Webpack Demo</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
  </head>
  <body>
    <script src="app.js"></script>
  </body>
</html>
```

Note:
Open `index.html in browser`

+++

```bash
$ npm install --save-dev webpack
$ npm install --save lodash-es
```

+++

```diff
+ import _ from 'lodash-es';

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

```diff
<html>
  <head>
    <title>Webpack Demo</title>
-   <script src="https://unpkg.com/lodash@4.16.6"></script>
  </head>
  <body>
-   <script src="app.js"></script>
+   <script src="dist/bundle.js"></script>
  </body>
</html>
```

+++

- ```bash
$ ./node_modules/.bin/webpack app.js dist/bundle.js
```

- <section>
  ```bash
  Hash: a3b251bb673551a7aa2d
  Version: webpack 2.5.1
  Time: 1496ms
      Asset     Size  Chunks                    Chunk Names
  bundle.js  1.03 MB       0  [emitted]  [big]  main
     [3] ./~/lodash-es/toInteger.js 758 bytes {0} [built]
     [4] ./~/lodash-es/toString.js 578 bytes {0} [built]
     [5] ./~/lodash-es/isObjectLike.js 612 bytes {0} [built]
     [6] ./~/lodash-es/isObject.js 731 bytes {0} [built]
     [8] ./~/lodash-es/keys.js 882 bytes {0} [built]
    [11] ./~/lodash-es/identity.js 368 bytes {0} [built]
    [12] ./~/lodash-es/isArrayLike.js 828 bytes {0} [built]
    [13] ./~/lodash-es/isArrayLikeObject.js 740 bytes {0} [built]
    [15] ./~/lodash-es/keysIn.js 776 bytes {0} [built]
    [16] ./~/lodash-es/last.js 399 bytes {0} [built]
    [19] ./~/lodash-es/isSymbol.js 680 bytes {0} [built]
    [22] ./~/lodash-es/eq.js 797 bytes {0} [built]
    [24] ./~/lodash-es/isFunction.js 991 bytes {0} [built]
   [498] ./~/lodash-es/lodash.js 17.2 kB {0} [built]
   [499] ./app.js 290 bytes {0} [built]
      + 629 hidden modules
  ```
  </section> <!-- .element: class="fragment" data-fragment-index="1" -->

+++

```diff
- import _ from 'lodash-es';
+ import join from 'lodash-es/join';

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
- element.innerHTML = _.join(['Hello','webpack'], ' ');
+ element.innerHTML = join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

<!-- Note: Lodash Webpack Plugin -->

+++

```bash
$ ./node_modules/.bin/webpack app.js dist/bundle.js
```

```bash
Hash: d65918f2300114756428
Version: webpack 2.5.1
Time: 59ms
  Asset     Size  Chunks             Chunk Names
bundle.js  4.03 kB       0  [emitted]  main
 [0] ./~/lodash-es/join.js 691 bytes {0} [built]
 [1] ./app.js 296 bytes {0} [built]
```

+++

#### `webpack.config.js`

```js
const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    }
};
```

```bash
$ ./node_modules/.bin/webpack
```
