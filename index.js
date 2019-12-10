let lib

// require is the only way (for now) to detect installed dependency
if (!lib) { try { lib = require('react') } catch (e) { } }
if (!lib) { try { lib = require('preact/hooks') } catch (e) { } }
if (!lib) { try { lib = require('rax') } catch (e) { } }
if (!lib) { try { lib = require('haunted') } catch (e) { } }
if (!lib) { try { lib = require('atomico') } catch (e) { } }
if (!lib) { try { lib = require('neverland') } catch (e) { } }
if (!lib) { try { lib = require('dom-augmentor') } catch (e) { } }
if (!lib) { try { lib = require('augmentor') } catch (e) { } }
if (!lib) { try { lib = require('fuco') } catch (e) { } }
if (!lib) { try { lib = require('tng-hooks') } catch (e) { } }
if (!lib) { try { lib = require('fn-with-hooks') } catch (e) { } }

if (!lib) throw Error('No installed hooks providers found.')

export let useState, useEffect, useCallback, useContext, useRef, useReducer, useLayoutEffect, useMemo, useDebugValue, useTransition, useImperativeHandle, useProperty

export default setHooks

function setHooks(hooks) {
  lib = hooks
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
setHooks(lib)

