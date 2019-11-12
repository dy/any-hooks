let lib = {}

try { lib = require('rax') } catch (e) { }

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
