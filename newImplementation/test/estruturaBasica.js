const jsml = require('../index')
const assert = require('./assert')

/**
 * html String
 * 
 * Converte um array de strings para uma html string
 */
assert.assert(jsml.toHtml(["teste"]), 'teste', "basic string array node");
/**
 * html DOCTYPE tag
 * 
 * Converte um array de strings para uma html string
 */
assert.assert(jsml.toHtml({"!DOCTYPE":""}), "<!DOCTYPE>", "DOCTYPE tag");
/*{
    html:{
        
    }
}
<html></html>

["teste-strint-array"]
var a= {"test-string-object":""}
a={
    "array-string":["teste", "teste"]
}
<array-string>testeteste</array-string>

["teste"]
<teste></teste>

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