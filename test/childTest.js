const jsml = require('../index')
const assert = require('./assert')

 /**
  * Html with children
  */
 assert.assert(jsml.toHtml({"html":{"div":{}}}), "<html><div></div></html>", "01-html with div child tag");

  /**
  * Html with children
  */
   assert.assert(jsml.toHtml({"html":{"head":{}}}), "<html><head></head></html>", "02-html with head child tag");

   /**
  * Html with children
  */
    assert.assert(jsml.toHtml({"html":{"head":{}, "body":{}}}), "<html><head></head><body></body></html>", "03-html with head and body children");
  
  /**
  * body with children
  */
var input = {"html":{"head":{}, "body":{"div":{}}}};
var output = "<html><head></head><body><div></div></body></html>";
assert.assert(jsml.toHtml(input), output, "04-html with head, body and body children");

  /**
  * doctype, html and body with children
  */
   input = [{"!DOCTYPE html":""},{"html":{"head":{}, "body":{"div":{}}}}];
   output = "<!DOCTYPE html><html><head></head><body><div></div></body></html>";
   assert.assert(jsml.toHtml(input), output, "05-doctype, html with head, body and body children");

 /**
  * doctype, html and body with children
  */
  input = [{
    "html":{
      "head":{
        "link": {},
        "title": {}
      }
    }
  }];
  output = "<html><head><link><title></title></head></html>";
  assert.assert(jsml.toHtml(input), output, "06-html with head, and head with link and title");

  /**
  * doctype, html and body with children
  */
   input = [{
    "html":{
      "head":{
        "link ref": {},
        "title": {}
      }
    }
  }];
  output = "<html><head><link ref><title></title></head></html>";
  assert.assert(jsml.toHtml(input), output, "06-html with head, and head with link and title");

  /**
  * body multiple children
  */
  input = {
      "body":{
        "class": "container",
        "h1": {}
      }
  };
  output = '<body class="container"><h1></h1></body>';
  assert.assert(jsml.toHtml(input), output, "07-body multiple children");