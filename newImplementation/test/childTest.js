const jsml = require('../index')
const assert = require('./assert')

 /**
  * Html with children
  */
 assert.assert(jsml.toHtml({"html":{"div":{}}}), "<html><div></div></html>", "html with div child tag");

  /**
  * Html with children
  */
   assert.assert(jsml.toHtml({"html":{"head":{}}}), "<html><head></head></html>", "html with head child tag");

   /**
  * Html with children
  */
    assert.assert(jsml.toHtml({"html":{"head":{}, "body":{}}}), "<html><head></head><body></body></html>", "html with head and body children");