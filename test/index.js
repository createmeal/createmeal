const conversor = require('../index')
const assert = require('./assert')



assert.assert(conversor.convertAttributes([{"lang": "pt-br"}])[0], 'lang="pt-br"', "Attribute creation");
assert.assert(conversor.create("!DOCTYPE"), '<!DOCTYPE >', "Doctype creation");
assert.assert(conversor.create("html"), '<html ></html>', "html creation");
assert.assert(conversor.create("head"), '<head ></head>', "head creation");
assert.assert(conversor.create("body"), '<body ></body>', "body creation");

