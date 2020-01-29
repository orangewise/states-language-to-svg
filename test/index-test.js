const assert = require('assert')
const dot = require('../index.js')
// const fs = require('fs')
// const join = require('path').join

async function test () {
  const sm = JSON.stringify(require('./fixtures/state-machine-a.json'))
  const graph = await dot.graph(sm)
  const expectedGraph = 'strict digraph { rankdir=TB; ratio=fill; splines=curved; edge [arrowsize=0.75 color="#333333"]; node [shape=rect color="#aaaaaa" style="rounded"]; start [shape=circle fillcolor="#ffda75" style="filled"]; end [shape=circle fillcolor="#ffda75" style="filled"]; "start" -> "CreateCleaning"; "CreateCleaning" -> "Wait Cleaning Model"; "Wait Cleaning Model" -> "Get Cleaning Job Status"; "Get Cleaning Job Status" -> "checkCleaningStatus"; "checkCleaningStatus" -> "CreateCleaningModelTask"; "CreateCleaningModelTask" -> "CreateCleaningModelEndpointConfigFunctionTask"; "CreateCleaningModelEndpointConfigFunctionTask" -> "CreateCleaningModelEndpointTask"; "CreateCleaningModelEndpointTask" -> "Wait Cleaning Endpoint"; "Wait Cleaning Endpoint" -> "Get Cleaning Endpoint Status"; "Get Cleaning Endpoint Status" -> "checkCleaningEndpointStatus"; "checkCleaningEndpointStatus" -> "CreateCleaningTransformJobTask"; "CreateCleaningTransformJobTask" -> "Wait Cleaning Batch Transform"; "Wait Cleaning Batch Transform" -> "Get Cleaning Transform Job Status"; "Get Cleaning Transform Job Status" -> "checkCleaningBatchTransformJobStatus"; "checkCleaningBatchTransformJobStatus" -> "CreateTraining"; "CreateTraining" -> "Wait Training Model"; "Wait Training Model" -> "Get Job Status"; "Get Job Status" -> "checkTrainingStatus"; "checkTrainingStatus" -> "CreateModelTask"; "CreateModelTask" -> "CreateInferenceModelEndpointConfigFunctionTask"; "CreateInferenceModelEndpointConfigFunctionTask" -> "CreateInferenceModelEndpointTask"; "CreateInferenceModelEndpointTask" -> "Wait Training Endpoint"; "Wait Training Endpoint" -> "Get Endpoint Status"; "Get Endpoint Status" -> "checkEndpointStatus"; "checkEndpointStatus" -> "Final step"; "Final step" -> "end"; "checkEndpointStatus" -> "Job Failed"; "Job Failed" -> "end"; "checkEndpointStatus" -> "Wait Training Endpoint"; "checkTrainingStatus" -> "Wait Training Model"; "checkTrainingStatus" -> "Job Failed"; "checkCleaningBatchTransformJobStatus" -> "Job Failed"; "checkCleaningBatchTransformJobStatus" -> "Wait Cleaning Batch Transform"; "checkCleaningEndpointStatus" -> "Job Failed"; "checkCleaningEndpointStatus" -> "Wait Cleaning Endpoint"; "checkCleaningStatus" -> "Wait Cleaning Model"; "checkCleaningStatus" -> "Job Failed"; }'
  assert.strictEqual(graph, expectedGraph)

  // const svg = dot.svg(graph)
  // const expectedSvg = fs.readFileSync(join(__dirname, 'fixtures', 'out.svg'), 'utf-8')
  // assert.strictEqual(svg, expectedSvg)
}

test()
