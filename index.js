export default setHooks
export let current, lib, libs = {}, useState, useEffect, useCallback, useContext, useRef, useReducer, useLayoutEffect, useMemo, useDebugValue, useTransition, useImperativeHandle, useProperty

// require is the only way (for now) to detect installed dependency
// besides, this is the most safe detectible signature
try { libs.react = require('react'); } catch (e) { }
try { libs.preact = libs['preact/hooks'] = require('preact/hooks'); } catch (e) { }
try { libs.rax = require('rax'); } catch (e) { }
try { libs.haunted = require('haunted'); } catch (e) { }
try { libs.atomico = require('atomico'); } catch (e) { }
try { libs.spect = require('spect'); } catch (e) { }
try { libs.neverland = require('neverland'); } catch (e) { }
try { libs['dom-augmentor'] = require('dom-augmentor'); } catch (e) { }
try { libs.augmentor = require('augmentor'); } catch (e) { }
try { libs.fuco = require('fuco'); } catch (e) { }
try { libs['tng-hooks'] = require('tng-hooks'); } catch (e) { }
try { libs['fn-with-hooks'] = require('fn-with-hooks'); } catch (e) { }

let defaultHooks = Object.keys(libs).filter(Boolean)[0]
if (defaultHooks) setHooks(defaultHooks)

function setHooks(hooks) {
  if (!hooks) hooks = defaultHooks

  if (typeof hooks === 'string') {
    hooks = libs[hooks]
    current = name
  }
  else {
    current = 'custom'
  }

  if (!hooks) throw Error('Unknown hooks: `' + arguments[0] + '`.')

  useState = hooks.useState
  useEffect = hooks.useEffect
  useCallback = hooks.useCallback
  useContext = hooks.useContext
  useRef = hooks.useRef
  useReducer = hooks.useReducer
  useLayoutEffect = hooks.useLayoutEffect
  useMemo = hooks.useMemo
  useDebugValue = hooks.useDebugValue
  useTransition = hooks.useTransition
  useImperativeHandle = hooks.useImperativeHandle
  useProperty = hooks.useProperty || hooks.useProp
}

