let lib = {}

try { lib = require('tng-hooks') } catch (e) { }

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
