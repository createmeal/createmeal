const jsml = require('../index')
const assert = require('./assert')

/**
 * html String
 * 
 * Converte um array de strings para uma html string
 */
assert.assert(jsml.toHtml(["teste"]), 'teste', "01-basic string array node");

/**
 * html String to writing html
 * 
 * Convert an string array to html string
 */
 assert.assert(jsml.toHtml(["<!DOCTYPE>"]), '<!DOCTYPE>', "02-Write html by stringarray");
 /**
 * html String to writing html
 * 
 * Convert an string array to html
 */
  assert.assert(jsml.toHtml(["<!DOCTYPE>", '<html lang="pt-BR"></html>']), '<!DOCTYPE><html lang="pt-BR"></html>', "03-Write html by stringarray - mor then one tag");
/**
 * html DOCTYPE tag
 * 
 * Converte um array de strings para uma html string
 */
assert.assert(jsml.toHtml({"!DOCTYPE":""}), "<!DOCTYPE>", "DOCTYPE tag");
assert.assert(jsml.toHtml({"!DOCTYPE html":""}), "<!DOCTYPE html>", "04-DOCTYPE tag with html attr");
/**
 * html tag 
{
    html:{
        
    }
}
<html></html>*/
assert.assert(jsml.toHtml({"html":""}), "<html></html>", "05-html tag");
assert.assert(jsml.toHtml({"html":{}}), "<html></html>", "06-html tag with empty object value");
assert.assert(jsml.toHtml({"html":{}}), "<html></html>", "07-html tag with null value");
assert.assert(jsml.toHtml({"html":[]}), "<html></html>", "08-html tag with empty array value");

/**
 * !DOCTYPE e HTML
 */
 assert.assert(jsml.toHtml([{"!DOCTYPE":""},{"html":""}]), "<!DOCTYPE><html></html>", "09-doctype and html tag");
 /**
  * Html with children
  */
 assert.assert(jsml.toHtml([{"!DOCTYPE":""},{"html":{"div":{}}}]), "<!DOCTYPE><html><div></div></html>", "10-html with div child tag");
/*
["teste-strint-array"]
var a= {"test-string-object":""}
a={
    "array-string":["teste", "teste"]
}
<array-string>testeteste</array-string>

[doctype, html{div:[div1, div2]}]
<docktype>
<html>
    <div>div1div2</div>
</html>

[doctype, html:{div:[div1, div2]}]
doctype
<html>
    <div>div1div2</div>
</html>

[doctype, html]
doctypehtml

[doctype, html:[{div:{}}, {div2:{}}]]

doctype
<html>
    <div></div>
    <div></div>
</html>*/