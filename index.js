let lib
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

module.exports = {
  useState: lib.useState,
  useReducer: lib.useReducer,
  useEffect: lib.useEffect,
  useMemo: lib.useMemo,
  useCallback: lib.useCallback,
  useContext: lib.useContext,
  useRef: lib.useRef,
  useImperativeHandle: lib.useImperativeHandle,
  useLayoutEffect: lib.useLayoutEffect,
  useDebugValue: lib.useDebugValue,
  useTransition: lib.useTransition
}
