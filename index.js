export default setHooks
export let current, lib, useState, useEffect, useCallback, useContext, useRef, useReducer, useLayoutEffect, useMemo, useDebugValue, useTransition, useImperativeHandle, useProperty

// require is the only way (for now) to detect installed dependency
// besides, this is the most safe detectible signature
if (!lib) { try { lib = require('react') } catch (e) { } if (lib) current = 'react' }
if (!lib) { try { lib = require('preact/hooks') } catch (e) { } if (lib) current = 'preact' }
if (!lib) { try { lib = require('rax') } catch (e) { } if (lib) current = 'rax' }
if (!lib) { try { lib = require('haunted') } catch (e) { } if (lib) current = 'haunted' }
if (!lib) { try { lib = require('atomico') } catch (e) { } if (lib) current = 'atomico' }
if (!lib) { try { lib = require('neverland') } catch (e) { } if (lib) current = 'neverland' }
if (!lib) { try { lib = require('dom-augmentor') } catch (e) { } if (lib) current = 'dom-augmentor' }
if (!lib) { try { lib = require('augmentor') } catch (e) { } if (lib) current = 'augmentor' }
if (!lib) { try { lib = require('fuco') } catch (e) { } if (lib) current = 'fuco' }
if (!lib) { try { lib = require('tng-hooks') } catch (e) { } if (lib) current = 'tng-hooks' }
if (!lib) { try { lib = require('fn-with-hooks') } catch (e) { } if (lib) current = 'fn-with-hooks' }

if (!lib) throw Error('No installed hooks providers found.')

function setHooks(hooks, provider) {
  current = provider
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
setHooks(lib, current)

