import createmeal from '../index.js';
import assert from './assert.js';

/**
 * html String
 * 
 * Converte um array de strings para uma html string
 */
assert.assert(createmeal.toHtml(["teste"]), 'teste', "01-basic string array node");
/**
 * html String as element child
 * 
 * Converte um array de strings para uma html string
 */
 assert.assert(createmeal.toHtml({"p":["teste"]}), '<p>teste</p>', "01b-basic string array node");
 /**
 * html String as element child - multiple strings
 * 
 * Converte um array de strings para uma html string
 */
  assert.assert(createmeal.toHtml({"p":["teste","de","strings"]}), '<p>testedestrings</p>', "01c-basic string array node - multiple strings");

/**
 * html String to writing html
 * 
 * Convert an string array to html string
 */
 assert.assert(createmeal.toHtml(["<!DOCTYPE>"]), '<!DOCTYPE>', "02-Write html by stringarray");
 /**
 * html String to writing html
 * 
 * Convert an string array to html
 */
  assert.assert(createmeal.toHtml(["<!DOCTYPE>", '<html lang="pt-BR"></html>']), '<!DOCTYPE><html lang="pt-BR"></html>', "03-Write html by stringarray - mor then one tag");
/**
 * html DOCTYPE tag
 * 
 * Converte um array de strings para uma html string
 */
assert.assert(createmeal.toHtml({"!DOCTYPE":""}), "<!DOCTYPE>", "DOCTYPE tag");
assert.assert(createmeal.toHtml({"!DOCTYPE html":""}), "<!DOCTYPE html>", "04-DOCTYPE tag with html attr");
/**
 * html tag 
{
    html:{
        
    }
}
<html></html>*/
assert.assert(createmeal.toHtml({"html":""}), "<html></html>", "05-html tag");
assert.assert(createmeal.toHtml({"html":{}}), "<html></html>", "06-html tag with empty object value");
assert.assert(createmeal.toHtml({"html":{}}), "<html></html>", "07-html tag with null value");
assert.assert(createmeal.toHtml({"html":[]}), "<html></html>", "08-html tag with empty array value");

/**
 * !DOCTYPE e HTML
 */
 assert.assert(createmeal.toHtml([{"!DOCTYPE":""},{"html":""}]), "<!DOCTYPE><html></html>", "09-doctype and html tag");
 /**
 * !DOCTYPE e HTML in a object
 */
  assert.assert(createmeal.toHtml({"!DOCTYPE":{}, "html":{}}), "<!DOCTYPE><html></html>", "09b-doctype and html tag");
 /**
  * Html with children
  */
 assert.assert(createmeal.toHtml([{"!DOCTYPE":""},{"html":{"div":{}}}]), "<!DOCTYPE><html><div></div></html>", "10-html with div child tag");

 /**
* multiple divs
*/
let input = {"body":[{"div":{}},{"div":{}}]};
let output = "<body><div></div><div></div></body>";
assert.assert(createmeal.toHtml(input), output, "11-multiple divs");
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