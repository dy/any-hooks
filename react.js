let lib = {}

try { lib = require('react') } catch (e) { }

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
