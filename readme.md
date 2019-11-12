# any-hooks [![Build Status](https://travis-ci.org/dy/any-hooks.svg?branch=master)](https://travis-ci.org/dy/any-hooks) [![unstable](https://img.shields.io/badge/stability-unstable-yellow.svg)](http://github.com/badges/stability-badges)

Resolve any installed available hooks.

[![NPM](https://nodei.co/npm/any-hooks.png?mini=true)](https://nodei.co/npm/any-hooks/)

```js
import { useState, useEffect } from 'any-hooks'

export function useMyHook(init) {
  let [state, setState] = useState(init)
}
```

## Supported libraries

**any-hooks** attempts to detect hooks in the following order:

* [`react`](https://ghub.io/react)
* [`preact`](https://ghub.io/preact)
* [`rax`](https://ghub.io/rax)
* [`haunted`](https://ghub.io/haunted)
* [`augmentor`](https://ghub.io/augmentor)
* [`atomico`](https://ghub.io/atomico)
* [`tng-hooks`](https://ghub.io/tng-hooks) (manual call API)
* [`fn-with-hooks`](https://ghub.io/fn-with-hooks) (manual call API)

(no opinion about the sequence, just based on popularity of packages).


## Supported hooks

|                        | React | Preact | Rax | Haunted | Augmentor | Atomico | TNG-hooks | fn-with-hooks |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| `useState`              | ✅    | ✅    | ✅  | ✅      | ✅        | ✅      | ✅      | ✅ |
| `useEffect`             | ✅    | ✅    | ✅  | ✅      | ✅        | ✅      | ✅      | ✅ |
| `useContext`            | ✅    | ✅    | ✅  | ✅      | ✅*       | ❌      | ❌      | ❌ |
| `useCallback`           | ✅    | ✅    | ✅  | ✅      | ✅        | ❌      | ✅      | ✅ |
| `useReducer`            | ✅    | ✅    | ✅  | ✅      | ✅        | ✅      | ✅      | ✅ |
| `useMemo`               | ✅    | ✅    | ✅  | ✅      | ✅        | ✅      | ✅      | ✅ |
| `useRef`                | ✅    | ✅    | ✅  | ✅      | ✅        | ❌      | ✅      | ❌ |
| `useLayoutEffect`       | ✅    | ✅    | ✅  | ✅      | ✅        | ✅      | ❌      | ❌ |
| `useImperativeHandle`   | ✅    | ✅    | ✅  | ❌      | ❌        | ❌      | ❌      | ❌ |
| `useDebugValue`         | ✅    | ❌    | ❌  | ❌      | ❌        | ❌      | ❌      | ❌ |
| `useTransition`         | ✅*   | ❌    | ❌  | ❌      | ❌        | ❌      | ❌      | ❌ |
| <small>`useProp`</small>|       |       |      |         |           |         |         |    |
| `useHook`               |       |       |      |         |           |         |         |    |
| `useHost`               |       |       |      |         |           |         |         |    |
| `useRender`             |       |       |      |         |           |         |         |    |
| `useEvent`              |       |       |      |         |           |         |         |    |


## Use cases

### Hooks provider for libraries / packages

**any-hooks** can be a better choice than react for hooks libraries - it extends hooks support to all frameworks.

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

**any-hooks** can serve as adapter for react hooks in non-react libraries, like [augmentor](https://ghub.io/augmentor), [haunted](https://ghub.io/haunted), [atomico](https://ghub.io/atomico) etc. The strategy is similar to [preact/compat](https://preactjs.com/guide/v10/getting-started#integrating-into-an-existing-pipeline) aliasing.

#### Aliasing in webpack

`webpack.config.js`:
```js
const config = {
   //...
  "resolve": {
    "alias": {
      "react": "any-hook"
    },
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

* [enhook](https://ghub.io/enhook) - enable hooks for any function.
* [remorph](https://ghub.io/@dy/remorph) - react/preact-based morphdom.
* [any-observable](https://ghub.io/any-observable) - resolve any installed Observable.

## License

MIT

<p align="right">HK</p>
