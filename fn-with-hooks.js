let lib = {}

try { lib = require('fn-with-hooks') } catch (e) { }

module.exports = {
  useState,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
  useContext,
  useRef,
  useLayoutEffect
} = lib
