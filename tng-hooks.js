let lib = {}

try { lib = require('tng-hooks') } catch (e) { }

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
