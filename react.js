let lib = {}

try { lib = require('react') } catch (e) { }

module.exports = {
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
