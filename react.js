let lib = {}

try { lib = require('react') } catch (e) { }

export const {
  useState,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
  useContext,
  useRef,
  useImperativeHandle,
  useLayoutEffect,
  useDebugValue
} = lib
