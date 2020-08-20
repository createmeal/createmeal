const Tag = require('./Tag');
const TAGS = require('./tags.json')
const Json = require('./Json');
const fs = require('fs');
const path = require('path');

let html = new Tag("html", [{'lang':"pt-br"}]);
let head = new Tag("head")
head.appendChild(new Tag("title", [], "Titulo da pagina"));
html.appendChild(head);
html.appendChild(new Tag("body"))
//console.log(html.toString());

let jsonDoc = fs.readFileSync(path.resolve(__dirname, "index.json"), 'utf8');
jsonDoc = JSON.parse(jsonDoc);

var jsonObject = new Json(jsonDoc);
var tags = jsonObject.toTag();

console.log( tags.join("\n"));

fs.writeFileSync(path.resolve(__dirname, "index.html"), tags.join("\n"));

var key = '1'
console.log("expressao",/^[0-9]+$/.exec(key))