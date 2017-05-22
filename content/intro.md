# Up and Running with Webpack

Slides available at https://github.com/Awk34/webpack-intro-slides


### Get a head start:

Latest Node.js: 7.10.0

```bash
$ mkdir myapp && cd $_
$ git init
$ echo -e 'node_modules/\ndist' > .gitignore
$ npm init -y
$ npm install --save-dev webpack lodash-es
```

---

## About Me

Andrew Koroluk

Architect @ DataVoke (We're hiring!)

https://angular-fullstack.github.io/

https://github.com/Awk34 / http://andrewk.me

---

## Current State

### Basic

- HTML
- CSS
- Regular JavaScript, loaded into `<script>` tags, communicate using global variables
  - Unorganized code

+++

- CSS, Sass, LESS, etc.
- RequireJS / CommonJS
  - More modules instead of globals
  - More up-front cost, heavy code-execution addition
- JS concatenated into less files

+++

- Grunt, Gulp, scripts, etc.
- CSS, Sass, LESS, etc. + PostCSS
- SystemJS / Browserify
- Unit tests
- Maybe transpilation

---

# What we want

- Easy TypeScript / Babel integration
- Structure / Organisation
- Quick to set up unit tests
- True JS Modules
