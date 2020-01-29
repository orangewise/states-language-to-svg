const dottle = require('@robodo/dottle')
const Viz = require('viz.js')

exports.graph = async function (sm) {
  return dottle.readOne(sm, {})
}

exports.svg = function (input) {
  return Viz(input, { format: 'svg', engine: 'dot' })
}
