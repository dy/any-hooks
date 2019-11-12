let lib = {}

try { lib = require('haunted') } catch (e) { }

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
