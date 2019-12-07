let lib = {}

// polyfill MessageChannel for node
// FIXME: remove once https://github.com/wtnbass/fuco/issues/33
if (typeof MessageChannel === 'undefined') {
  global.MessageChannel = function () {
    let port1 = {},
      port2 = {
        postMessage(...args) {
          if (port1.onmessage) port1.onmessage(...args)
        }
      }
    return {
      port1,
      port2
    }
  }
}

try {
  lib = require('fuco');
} catch (e) {}

module.exports = {
  useState: lib.useState,
  useReducer: lib.useReducer,
  useEffect: lib.useEffect,
  useMemo: lib.useMemo,
  useCallback: lib.useCallback,
  useContext: lib.useContext,
  useRef: lib.useRef,
  useLayoutEffect: lib.useLayoutEffect
}
