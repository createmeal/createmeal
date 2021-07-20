# Plano de testes

## Estruturas Basicas

Os testes de estruturas basicas visa validar estruturas basicas de um json
e como elas serão convertidas para o formato html.

|id |Teste name|Descrição|Condições|Resultado|
|---|----------|---------|---------|---------|
|001|basic string array node|Check behavior of an array of strings node|Simple array of strings|should generate one line of concatened words|

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