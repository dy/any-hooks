let lib = {}

try { lib = require('preact/hooks') } catch (e) { }

export const {
  useState,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
  useContext,
  useRef,
  useImperativeHandle,
  useLayoutEffect
} = lib
