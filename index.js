const sm = require('./test/fixtures/state-machine-a.json')
const dottle = require('dottle')

async function go() {
  console.log(await dottle.readAll(JSON.stringify(sm), {}));
}

go()