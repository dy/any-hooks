let lib = {}

try { lib = require('atomico') } catch (e) { }

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
