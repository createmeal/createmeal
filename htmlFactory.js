const Tag = require('./Tag');

let html = new Tag("html", [{'lang':"pt-br"}]);
let head = new Tag("head")
head.appendChild(new Tag("title", [], "Titulo da pagina"));
html.appendChild(head);
html.appendChild(new Tag("body"))
console.log(html.toString());