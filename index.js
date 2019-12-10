export default setHooks
export let current, libs, useState, useEffect, useCallback, useContext, useRef, useReducer, useLayoutEffect, useMemo, useDebugValue, useTransition, useImperativeHandle, useProperty

// require is the only way (for now) to detect installed dependency
// besides, this is the most safe detectible signature
try { let lib = require('react'); libs.react = lib } catch (e) { }
try { let lib = require('preact/hooks'); libs.preact = lib } catch (e) { }
try { let lib = require('rax'); libs.rax = lib } catch (e) { }
try { let lib = require('haunted'); libs.haunted = lib } catch (e) { }
try { let lib = require('atomico'); libs.atomico = lib } catch (e) { }
try { let lib = require('neverland'); libs.neverland = lib } catch (e) { }
try { let lib = require('dom-augmentor'); libs['dom-augmentor'] = lib } catch (e) { }
try { let lib = require('augmentor'); libs.augmentor = lib } catch (e) { }
try { let lib = require('fuco'); libs.fuco = lib } catch (e) { }
try { let lib = require('tng-hooks'); libs['tng-hooks'] = lib } catch (e) { }
try { let lib = require('fn-with-hooks'); libs['fn-with-hooks'] = lib } catch (e) { }

function setHooks(hooks) {
  if (typeof hooks === 'string') {
    hooks = libs[hooks]
    current = hooks
    if (!hooks) throw Error('Hooks provider is not found: `' + hooks + '`.')
  }
  else {
    lib = hooks
    current = 'custom'
    useState = lib.useState
    useEffect = lib.useEffect
    useCallback = lib.useCallback
    useContext = lib.useContext
    useRef = lib.useRef
    useReducer = lib.useReducer
    useLayoutEffect = lib.useLayoutEffect
    useMemo = lib.useMemo
    useDebugValue = lib.useDebugValue
    useTransition = lib.useTransition
    useImperativeHandle = lib.useImperativeHandle
    useProperty = lib.useProperty || lib.useProp
  }
}

setHooks(Object.keys(libs).filter(Boolean)[0])
