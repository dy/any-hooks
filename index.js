import * as preact from './preact'
import * as react from './react'
import * as rax from './rax'
import * as haunted from './haunted'
import * as atomico from './atomico'
import * as augmentor from './augmentor'
import * as tng from './tng'

const winner = preact.render ? preact :
  react.render ? react :
  rax.render ? rax :
  augmentor.enhook ? augmentor :
  augmentor.enhook ? augmentor :
  augmentor.enhook ? augmentor :
  tng.enhook ? tng : null

const { render, h, enhook, useState, useReducer, useEffect, useMemo, useCallback, useRef } = winner
export { render, h, enhook, useState, useReducer, useEffect, useMemo, useCallback, useRef }
