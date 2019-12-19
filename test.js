import t from 'tst'
import setHooks, * as hooks from './index.js'


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


t.skip('default', t => {
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


t.only('preact', async t => {
  // setHooks('preact/hooks')
  let preactHooks = await import('preact/hooks')
  setHooks(preactHooks)

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

t.only('react', async t => {
  let react = await import('preact/hooks')
  setHooks(react)

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

t.browser('haunted', t => {
  // FIXME
  if (process.versions.node) return t.end()

  setHooks('haunted')

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

t.only('augmentor', async t => {
  let aug = await import('augmentor')
  setHooks(aug)

  // setHooks('augmentor')

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
  setHooks('dom-augmentor')

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
  setHooks('neverland')

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
  setHooks('rax')

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
  setHooks('atomico')

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
  setHooks('tng-hooks')

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
  setHooks('fn-with-hooks')

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
  setHooks('fuco')

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

t('custom', t => {
  setHooks('custom-hooks', require('preact/hooks'))

  t.ok(hooks.useState, 'useState')
  t.ok(hooks.useReducer, 'useReducer')
  t.ok(hooks.useEffect, 'useEffect')
  t.ok(hooks.useMemo, 'useMemo')
  t.ok(hooks.useCallback, 'useCallback')
  t.ok(hooks.useRef, 'useRef')
  t.ok(hooks.useContext, 'useContext')
  t.ok(hooks.useLayoutEffect, 'useLayoutEffect')

  t.notEqual(hooks.current, 'fuco')

  t.end()
})


t('null', t => {
  setHooks(null)

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

