// polyfill MessageChannel for node (fuco requires it)
// FIXME: remove once https://github.com/wtnbass/fuco/issues/33
if (typeof MessageChannel === 'undefined') {
  global.MessageChannel = function () {
    let port1 = {},
      port2 = {
        postMessage(...args) {
          if (port1.onmessage) port1.onmessage(...args)
        }
      }
    return {
      port1,
      port2
    }
  }
}


let t = require('tape')
let hooks = require('./index.js')
let setHooks = hooks.default


t('auto', t => {
  t.ok(hooks.useState, 'useState')
  t.ok(hooks.useReducer, 'useReducer')
  t.ok(hooks.useEffect, 'useEffect')
  t.ok(hooks.useMemo, 'useMemo')
  t.ok(hooks.useCallback, 'useCallback')
  t.ok(hooks.useRef, 'useRef')
  t.ok(hooks.useContext, 'useContext')
  t.ok(hooks.useLayoutEffect, 'useLayoutEffect')

  t.end()
})


t('preact', t => {
  setHooks(require('preact/hooks'))

  t.ok(hooks.useState, 'useState')
  t.ok(hooks.useReducer, 'useReducer')
  t.ok(hooks.useEffect, 'useEffect')
  t.ok(hooks.useMemo, 'useMemo')
  t.ok(hooks.useCallback, 'useCallback')
  t.ok(hooks.useRef, 'useRef')
  t.ok(hooks.useContext, 'useContext')
  t.ok(hooks.useLayoutEffect, 'useLayoutEffect')

  t.end()
})

t('react', t => {
  setHooks(require('react'))

  t.ok(hooks.useState, 'useState')
  t.ok(hooks.useReducer, 'useReducer')
  t.ok(hooks.useEffect, 'useEffect')
  t.ok(hooks.useMemo, 'useMemo')
  t.ok(hooks.useCallback, 'useCallback')
  t.ok(hooks.useRef, 'useRef')
  t.ok(hooks.useContext, 'useContext')
  t.ok(hooks.useLayoutEffect, 'useLayoutEffect')
  t.notOk(hooks.createElement)

  t.end()
})

t('haunted', t => {
  setHooks(require('haunted'))

  t.ok(hooks.useState, 'useState')
  t.ok(hooks.useReducer, 'useReducer')
  t.ok(hooks.useEffect, 'useEffect')
  t.ok(hooks.useMemo, 'useMemo')
  t.ok(hooks.useCallback, 'useCallback')
  t.ok(hooks.useRef, 'useRef')
  t.ok(hooks.useContext, 'useContext')
  t.ok(hooks.useLayoutEffect, 'useLayoutEffect')

  t.end()
})

t('augmentor', t => {
  setHooks(require('augmentor'))

  t.ok(hooks.useState, 'useState')
  t.ok(hooks.useReducer, 'useReducer')
  t.ok(hooks.useEffect, 'useEffect')
  t.ok(hooks.useMemo, 'useMemo')
  t.ok(hooks.useCallback, 'useCallback')
  t.ok(hooks.useRef, 'useRef')
  t.ok(hooks.useContext, 'useContext')
  t.ok(hooks.useLayoutEffect, 'useLayoutEffect')

  t.end()
})

t('dom-augmentor', t => {
  setHooks(require('dom-augmentor'))

  t.ok(hooks.useState, 'useState')
  t.ok(hooks.useReducer, 'useReducer')
  t.ok(hooks.useEffect, 'useEffect')
  t.ok(hooks.useMemo, 'useMemo')
  t.ok(hooks.useCallback, 'useCallback')
  t.ok(hooks.useRef, 'useRef')
  t.ok(hooks.useContext, 'useContext')
  t.ok(hooks.useLayoutEffect, 'useLayoutEffect')

  t.end()
})

t('neverland', t => {
  setHooks(require('neverland'))

  t.ok(hooks.useState, 'useState')
  t.ok(hooks.useReducer, 'useReducer')
  t.ok(hooks.useEffect, 'useEffect')
  t.ok(hooks.useMemo, 'useMemo')
  t.ok(hooks.useCallback, 'useCallback')
  t.ok(hooks.useRef, 'useRef')
  t.ok(hooks.useContext, 'useContext')
  t.ok(hooks.useLayoutEffect, 'useLayoutEffect')

  t.end()
})

t('rax', t => {
  setHooks(require('rax'))

  t.ok(hooks.useState, 'useState')
  t.ok(hooks.useReducer, 'useReducer')
  t.ok(hooks.useEffect, 'useEffect')
  t.ok(hooks.useMemo, 'useMemo')
  t.ok(hooks.useCallback, 'useCallback')
  t.ok(hooks.useRef, 'useRef')
  t.ok(hooks.useContext, 'useContext')
  t.ok(hooks.useLayoutEffect, 'useLayoutEffect')

  t.end()
})

t('atomico', t => {
  setHooks(require('atomico'))

  t.ok(hooks.useState, 'useState')
  t.ok(hooks.useReducer, 'useReducer')
  t.ok(hooks.useEffect, 'useEffect')
  t.ok(hooks.useMemo, 'useMemo')
  t.ok(hooks.useRef, 'useRef')
  // t.ok(hooks.useCallback, 'useCallback')
  // t.ok(hooks.useContext, 'useContext')
  // t.ok(hooks.useLayoutEffect, 'useLayoutEffect')

  t.end()
})

t('tng-hooks', t => {
  setHooks(require('tng-hooks'))

  t.ok(hooks.useState, 'useState')
  t.ok(hooks.useReducer, 'useReducer')
  t.ok(hooks.useEffect, 'useEffect')
  t.ok(hooks.useMemo, 'useMemo')
  t.ok(hooks.useCallback, 'useCallback')
  t.ok(hooks.useRef, 'useRef')
  // t.ok(hooks.useContext, 'useContext')
  // t.ok(hooks.useLayoutEffect, 'useLayoutEffect')

  t.end()
})

t('fn-with-hooks', t => {
  setHooks(require('fn-with-hooks'))

  t.ok(hooks.useState, 'useState')
  t.ok(hooks.useReducer, 'useReducer')
  t.ok(hooks.useEffect, 'useEffect')
  t.ok(hooks.useMemo, 'useMemo')
  t.ok(hooks.useCallback, 'useCallback')
  // t.ok(hooks.useRef, 'useRef')
  // t.ok(hooks.useContext, 'useContext')
  // t.ok(hooks.useLayoutEffect, 'useLayoutEffect')

  t.end()
})

t('fuco', t => {
  setHooks(require('fuco'))

  t.ok(hooks.useState, 'useState')
  t.ok(hooks.useReducer, 'useReducer')
  t.ok(hooks.useEffect, 'useEffect')
  t.ok(hooks.useMemo, 'useMemo')
  t.ok(hooks.useCallback, 'useCallback')
  t.ok(hooks.useRef, 'useRef')
  t.ok(hooks.useContext, 'useContext')
  t.ok(hooks.useLayoutEffect, 'useLayoutEffect')

  t.end()
})
