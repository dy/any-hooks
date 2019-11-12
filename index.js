let preact = require('./preact')
let react = require('./react')
let rax = require('./rax')
let haunted = require('./haunted')
let atomico = require('./atomico')
let augmentor = require('./augmentor')
let tng = require('./tng-hooks')
let fn = require('./fn-with-hooks')

const winner = react.useState ? react :
  preact.useState ? preact :
  rax.useState ? rax :
  augmentor.useState ? augmentor :
  atomico.useState ? atomico :
  haunted.useState ? haunted :
  tng.useState ? tng :
  fn.useState ? fn : null

if (!winner) throw Error('No installed hooks providers found.')

module.exports = winner
