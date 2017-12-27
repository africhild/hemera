'use strict'

const Hp = require('hemera-plugin')

function hemeraSafePromises(hemera, opts, done) {
  const mps = require('make-promises-safe')
  mps.abort = !!opts.abort
  done()
}

const plugin = Hp(hemeraSafePromises, {
  hemera: '>=3',
  name: require('./package.json').name
})

module.exports = plugin
