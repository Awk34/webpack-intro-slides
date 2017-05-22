## Adding React

```bash
$ npm install --save-dev react react-dom babel-plugin-transform-react-jsx
```

#### `app.js`
```diff
+ import React from 'react';
+ import ReactDOM from 'react-dom';
import join from 'lodash-es/join';

import './app.scss';

+ class Example extends React.Component {
+     render() {
+         return (
+             <div className="border">
+                 {join(['Hello','webpack'], ' ')}
+             </div>
+         );
+     }
+ }
+
+ ReactDOM.render(
+     <Example />,
+     document.getElementById('root')
+ );

...
```

+++

#### `index.html`
```diff
...
<body>
+ <div id="root"></div>
<script src="dist/bundle.js"></script>
</body>
...
```

#### `.babelrc`
```diff
}
  ...
- ]
+ ],
+ "plugins": ["transform-react-jsx"]
}
```
