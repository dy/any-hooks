export let useState, useEffect, useCallback, useContext, useRef, useReducer, useLayoutEffect, useMemo, useDebugValue, useTransition, useImperativeHandle, useProperty

export default function register(hooks) {
  if (!hooks) throw Error('Undefined hooks')

  useState = hooks.useState
  useEffect = hooks.useEffect
  useCallback = hooks.useCallback
  useContext = hooks.useContext
  useRef = hooks.useRef
  useReducer = hooks.useReducer
  useLayoutEffect = hooks.useLayoutEffect
  useMemo = hooks.useMemo
  useTransition = hooks.useTransition
  useImperativeHandle = hooks.useImperativeHandle
  useProperty = hooks.useProperty || hooks.useProp
}

let hooks

// require is the only way to detect installed hooks
// until `await import()` or `import.meta.resolve()` is implemented
if (!hooks) try { hooks = require('react') } catch (e) {}
if (!hooks) try { hooks = require('preact/hooks') } catch (e) { }
if (!hooks) try { hooks = require('rax') } catch (e) { }
if (!hooks) try { hooks = require('haunted') } catch (e) { }
if (!hooks) try { hooks = require('atomico') } catch (e) { }
if (!hooks) try { hooks = require('spect') } catch (e) { }
if (!hooks) try { hooks = require('neverland') } catch (e) { }
if (!hooks) try { hooks = require('dom-augmentor') } catch (e) { }
if (!hooks) try { hooks = require('component-register-hooks') } catch (e) { }
if (!hooks) try { hooks = require('plumejs') } catch (e) { }
if (!hooks) try { hooks = require('augmentor') } catch (e) { }
if (!hooks) try { hooks = require('fuco') } catch (e) { }
if (!hooks) try { hooks = require('tng-hooks') } catch (e) { }
if (!hooks) try { hooks = require('fn-with-hooks') } catch (e) { }

if (hooks) register(hooks)
