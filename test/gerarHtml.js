const jsml = require('../index')
const assert = require('./assert')

let json = [{"!DOCTYPE html":null},{"html":{
    "title": ["Teste de geração"],
    body:[{
        h1:["Hello World!"]
    }]
}}];
console.log(jsml.toHtml(json))