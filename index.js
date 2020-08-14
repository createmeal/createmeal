const fs = require('fs');

const OPENTAGS = ["!DOCTYPE", "img", "br", "hr"];

let jsonDoc = fs.readFileSync("index.json", 'utf8');
jsonDoc = JSON.parse(jsonDoc);

/**
 * cria o elemento HTML
 * @param {*} name 
 * @param {*} children 
 * @param {*} options 
 */
function create(name, children = [], options = []) {
    if (OPENTAGS.indexOf(name) > -1) {
        return `<${name} ${options.join(" ")}>`;
    } else {
        return `<${name} ${options.join(" ")}>${children.join("")}</${name}>`;
    }
}

/**
 * converte os atributos do elemento para uma lista de string
 * @param {*} list 
 */
function convertAttributes(list) {
    let attributes = [];
    for (const a of list) {
        for (const b in a) {
            if (a[b] !== "") {
                attributes.push(`${b}="${a[b]}"`);
            } else {
                attributes.push(b);
            }
        }
    }
    return attributes;
}

let html = "";

for (const field in jsonDoc) {
    let children = [];
    let options = [];
    for (const subfield in jsonDoc[field]) {
        if (Array.isArray(jsonDoc[field][subfield])) {
            let obj = convertAttributes(jsonDoc[field][subfield]);
            options.push(obj);
        } else {
            children.push(create(subfield));
        }
    }
    html = html + create(field, children, options);
}
fs.writeFileSync("index.html", html);
console.log(html);