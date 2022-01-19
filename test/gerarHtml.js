import createmeal from '../index.js';

let json = [{"!DOCTYPE html":null},{"html":{
    "title": ["Teste de geração"],
    body:[{
        h1:["Hello World!"]
    }]
}}];
console.log(createmeal.toHtml(json))