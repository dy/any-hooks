let t = require('tape')


t('auto', t => {
  let hooks = require('./index.js')

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
  let hooks = require('./preact.js')

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
  let hooks = require('./react.js')

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

t('haunted', t => {
  let hooks = require('./haunted.js')

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
  let hooks = require('./augmentor.js')

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
  let hooks = require('./rax.js')

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
  let hooks = require('./atomico.js')

  t.ok(hooks.useState, 'useState')
  t.ok(hooks.useReducer, 'useReducer')
  t.ok(hooks.useEffect, 'useEffect')
  t.ok(hooks.useMemo, 'useMemo')
  // t.ok(hooks.useCallback, 'useCallback')
  t.ok(hooks.useRef, 'useRef')
  // t.ok(hooks.useContext, 'useContext')
  // t.ok(hooks.useLayoutEffect, 'useLayoutEffect')

  t.end()
})

t('tng-hooks', t => {
  let hooks = require('./tng-hooks.js')

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
  let hooks = require('./fn-with-hooks.js')

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
