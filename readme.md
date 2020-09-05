# any-hooks [![Build Status](https://travis-ci.org/unihooks/any-hooks.svg?branch=master)](https://travis-ci.org/unihooks/any-hooks) [![unstable](https://img.shields.io/badge/stability-unstable-yellow.svg)](http://github.com/badges/stability-badges)

Resolve available hooks. Hooks are detected from installed hook libraries, if no hooks found - manual setup is expected.

[![NPM](https://nodei.co/npm/any-hooks.png?mini=true)](https://nodei.co/npm/any-hooks/)

```js
import { useState, useEffect } from 'any-hooks'

export function useMyHook(init) {
  let [state, setState] = useState(init)
}
```

### Detected libraries:

* [x] [`react`](https://ghub.io/react)
* [x] [`preact`](https://ghub.io/preact)
* [x] [`rax`](https://ghub.io/rax)
* [x] [`haunted`](https://ghub.io/haunted)
* [x] [`fuco`](https://ghub.io/fuco)
* [x] [`augmentor`](https://ghub.io/augmentor) ([`dom-augmentor`](https://ghub.io/dom-augmentor), [`neverland`](https://ghub.io/neverland))
* [x] [`atomico`](https://ghub.io/atomico)
* [ ] [`tng-hooks`](https://ghub.io/tng-hooks) (manual)
* [ ] [`fn-with-hooks`](https://ghub.io/fn-with-hooks) (manual)
* [ ] [`plumejs`](https://www.npmjs.com/package/plumejs) (manual)
* [ ] [`component-register-hooks`](https://www.npmjs.com/package/component-register-hooks) (manual)

### Set hooks manually:

```js
import hooks from 'tng-hooks'
import setHooks, { useState, useEffect } from 'any-hooks'

// switch global hooks to custom hooks lib, like tng-hooks
setHooks(hooks)
```


## Supported hooks

|                         | React | Preact | Rax | Haunted  | Augmentor | Fuco  | Atomico  | TNG-hooks | fn-with-hooks |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| `useState`              | ✅    | ✅    | ✅  | ✅      | ✅                         | ✅    | ✅      | ✅        | ✅ |
| `useEffect`             | ✅    | ✅    | ✅  | ✅      | ✅                         | ✅    | ✅      | ✅        | ✅ |
| `useContext`            | ✅    | ✅    | ✅  | ✅      | ✅*                        | ✅    | ❌      | ❌        | ❌ |
| `useCallback`           | ✅    | ✅    | ✅  | ✅      | ✅                         | ✅    | ❌      | ✅        | ✅ |
| `useReducer`            | ✅    | ✅    | ✅  | ✅      | ✅                         | ✅    | ✅      | ✅        | ✅ |
| `useMemo`               | ✅    | ✅    | ✅  | ✅      | ✅                         | ✅    | ✅*     | ✅        | ✅ |
| `useRef`                | ✅    | ✅    | ✅  | ✅      | ✅                         | ✅    | ❌      | ✅        | ❌ |
| `useLayoutEffect`       | ✅    | ✅    | ✅  | ✅      | ✅                         | ✅    | ❌      | ❌        | ❌ |
| `useImperativeHandle`   | ✅    | ✅    | ✅  | ❌      | ❌                         | ❌    | ❌      | ❌        | ❌ |
| `useDebugValue`*        | ✅    | ❌    | ❌  | ❌      | ❌                         | ❌    | ❌      | ❌        | ❌ |
| `useTransition`*        | ✅*   | ❌    | ❌  | ❌      | ❌                         | ❌    | ❌      | ❌        | ❌ |
| `useProperty`*          | ❌    | ❌    | ❌  | ❌      | ❌                         | ✅    | ✅      | ❌        | ❌ |

<sup>*</sup> − non-standard



## Use cases

### Hooks libraries / packages

_Any-hooks_ can be used in hooks libraries (like [unihooks](https://ghub.io/unihooks)) to extend frameworks support to non-react.

```js
// super-hooks
import { useState, useEffect } from 'any-hooks'

export function useMySuperHook(init) {
  let [state, setState] = useState(init)

  // ...

  return [state, setState]
}
```

### Hooks adapter

_Any-hooks_ can enable react hooks for non-react libraries, like [augmentor](https://ghub.io/augmentor), [haunted](https://ghub.io/haunted) etc. The strategy is similar to [preact/compat](https://preactjs.com/guide/v10/getting-started#integrating-into-an-existing-pipeline) aliasing.

#### Aliasing in webpack

`webpack.config.js`:
```js
const config = {
   //...
  "resolve": {
    "alias": {
      "react": "any-hook"
    },
  },
  // mute warnings
  "stats": {
    "warnings": false
  }
}
```

#### Aliasing in parcel

`package.json`:
```json
{
  "alias": {
    "react": "any-hooks"
  },
}
```

#### Aliasing in babel

`.babelrc`:
```js
{
  "plugins": [
    ["module-resolver", {
      "alias": {
        "react": "any-hooks"
      }
    }]
  ]
}
```

#### Aliasing in rollup

`rollup.config.js`:
```js
import alias from '@rollup/plugin-alias'

module.exports = {
  //...
  plugins: [
    alias({
      entries: {
          react: 'any-hooks'
      }
    })
  ]
}
```

#### Aliasing in jest

`jest.config.js`:
```js
{
  // ...
  "moduleNameMapper": {
    "react": "any-hooks"
  },
}
```

#### Aliasing via browserify

`npm i -D aliasify`, then in `package.json`:
```js
{
  "aliasify": {
    "aliases": {
      "react": "any-hooks"
    }
  },
}
```

#### Aliasing in node

`npm i -D module-alias`, then:

```js
var moduleAlias = require('module-alias')
moduleAlias.addAliases({ 'react': 'any-hooks' })
```

## See also

* [enhook](https://ghub.io/enhook) − turn function into hooks-enabled function.
* [unihooks](https://ghub.io/unihooks) − multiframework hooks collection.
* [any-observable](https://ghub.io/any-observable) − resolve any installed Observable.
* [any-promise](https://ghub.io/any-promise) − resolve any installed Promise.
* [jsx-pragmatic](https://github.com/krakenjs/jsx-pragmatic) − any-framework JSX

## License

MIT

<p align="right">HK</p>
