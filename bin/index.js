#!/usr/bin/env node

const getStdin = require('get-stdin')
const dot = require('../index.js')

async function go () {
  const sm = await getStdin()
  const input = await dot.graph(sm)
  const svg = dot.svg(input)
  console.log(svg)
}

go()
