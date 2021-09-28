const jsml = require('../index')
const assert = require('./assert')

assert.assert(jsml.HTML(["teste"]), 'teste', "basic string array node");
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