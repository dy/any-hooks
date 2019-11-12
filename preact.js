let lib = {}

try { lib = require('preact/hooks') } catch (e) { }

module.exports = {
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
