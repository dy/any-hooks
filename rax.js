let lib = {}

try { lib = require('rax') } catch (e) { }

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
