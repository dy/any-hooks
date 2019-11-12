let lib = {}

try { lib = require('fn-with-hooks') } catch (e) { }
console.log(lib)
export const {
  useState,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
  useContext,
  useRef,
  useLayoutEffect
} = lib
