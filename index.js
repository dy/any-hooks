export default setHooks
export let current, lib, libs = {}, useState, useEffect, useCallback, useContext, useRef, useReducer, useLayoutEffect, useMemo, useDebugValue, useTransition, useImperativeHandle, useProperty

// require is the only way (for now) to detect installed dependency
// besides, this is the most safe detectible signature
try { libs.react = require('react'); } catch (e) { }
try { libs.preact = libs['preact/hooks'] = require('preact/hooks'); } catch (e) { }
try { libs.rax = require('rax'); } catch (e) { }
try { libs.haunted = require('haunted'); } catch (e) { }
try { libs.atomico = require('atomico'); } catch (e) { }
try { libs.neverland = require('neverland'); } catch (e) { }
try { libs['dom-augmentor'] = require('dom-augmentor'); } catch (e) { }
try { libs.augmentor = require('augmentor'); } catch (e) { }
try { libs.fuco = require('fuco'); } catch (e) { }
try { libs['tng-hooks'] = require('tng-hooks'); } catch (e) { }
try { libs['fn-with-hooks'] = require('fn-with-hooks'); } catch (e) { }

let defaultHooks = Object.keys(libs).filter(Boolean)[0]

function setHooks(name, hooks) {
  if (!name) name = defaultHooks

  lib = libs[name]
  if (!lib && !hooks) throw Error('Unknown hooks: `' + name + '`.')

  current = name
  if (!lib) lib = libs[name] = hooks

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

setHooks()
