let lib = {}

try { lib = require('tng-hooks') } catch (e) { }

module.exports = {
  useState: lib.useState,
  useReducer: lib.useReducer,
  useEffect: lib.useEffect,
  useMemo: lib.useMemo,
  useCallback: lib.useCallback,
  useContext: lib.useContext,
  useRef: lib.useRef,
  useLayoutEffect: lib.useLayoutEffect
}
