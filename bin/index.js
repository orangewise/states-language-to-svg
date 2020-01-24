#!/usr/bin/env node

const Viz = require('viz.js')
const dottle = require('dottle')
const getStdin = require('get-stdin')

async function go() {
  const sm = await getStdin()
  const input = await dottle.readOne(sm, {})
  const output = Viz(input, { format: 'svg', engine: 'dot' })
  console.log(output)
}

go()
