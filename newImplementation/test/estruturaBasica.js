const jsml = require('../index')
const assert = require('./assert')
assert.assert(jsml.HTML(["teste-strint-array"]), 'teste', "basic string array node");
