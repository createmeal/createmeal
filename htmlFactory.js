const Tag = require('./Tag');
const TAGS = require('./tags.json')
const Json = require('./Json');
const fs = require('fs');
const path = require('path');

//Example of using Tags
let html = new Tag("html", [{'lang':"pt-br"}]);
let head = new Tag("head")
head.appendChild(new Tag("title", [], "Titulo da pagina"));
html.appendChild(head);
html.appendChild(new Tag("body"))
//console.log(html.toString());

//Example of use of json Class to construct html
let jsonDoc = fs.readFileSync(path.resolve(__dirname, "index.json"), 'utf8');
jsonDoc = JSON.parse(jsonDoc);

var indexhtml = new Json(jsonDoc).toString();
console.log( indexhtml);
fs.writeFileSync(path.resolve(__dirname, "index.html"), indexhtml);
