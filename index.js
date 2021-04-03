const fs = require('fs');
const path = require('path');
const Node = require('./composite/Node.js')
//require('./htmlFactory')

const OPENTAGS = ["!DOCTYPE", "img", "br", "hr", "link"];

let jsonDoc = fs.readFileSync(path.resolve(__dirname, "index.json"), 'utf8');
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
    for (const attribute of list) {
        for (const key in attribute) {
            if (attribute[key] !== "") {
                attributes.push(`${key}="${attribute[key]}"`);
            } else {
                attributes.push(key);
            }
        }
    }
    return attributes;
}

let html = "";
/*
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
}*/

function getNodes(jsonDoc){
    let nodes = [];
    if(typeof jsonDoc ==='object'){
        for(elementName of Object.keys(jsonDoc)){
            let element = jsonDoc[elementName];
            let node = new Node(elementName);
            let children = getNodes(element);
            for(child of children){
                node.add(child);
            }   
            nodes.push(node);
        }
    } 
    if(Array.isArray(jsonDoc)) {
        for(element of jsonDoc){
            let elementName = Object.keys(element)[0];
            let node = new Node(elementName);
            let children = getNodes(element);
            for(child of children){
                node.add(child);
            }            
            nodes.push(node);
        }
    }
    return nodes;
}


let nodes = getNodes(jsonDoc);

function traverse(indent, node) {
    log.add(Array(indent++).join("--") + node.name);

    for (var i = 0, len = node.children.length; i < len; i++) {
        traverse(indent, node.getChild(i));
    }
}

// logging helper

var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();

for(node of nodes){
    traverse(1, node);
    log.show();
}


fs.writeFileSync(path.resolve(__dirname, "index.html"), html);
//console.log(html);

module.exports ={create, convertAttributes}