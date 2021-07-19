const fs = require('fs');
const path = require('path');
const Node = require('../composite/Node.js')

const OPENTAGS = ["!DOCTYPE", "img", "br", "hr", "link"];

let jsonDoc = fs.readFileSync(path.resolve(__dirname, "index.json"), 'utf8');
jsonDoc = JSON.parse(jsonDoc);

let html = "";

/**
 * Metodo responsavel por ler o Json e converter para html Nodes
 * 
 * O retorno é o array de nós de html a ser percorrido afim de gerar o HTML.
 * @param {*} jsonDoc - json que representa o HTML 
 * @returns array de nós do html.
 */
function jsonNodeToHtmlNode(jsonDoc){
    let nodes = [];
    foreEachNode(jsonDoc);
    return nodes;
}

/**
 * responsible for iterate all json nodes independing if is object or array.
 * @param {*} jsonDoc 
 */
function foreEachNode(jsonDoc){
    if(Array.isArray(jsonDoc)){
        console.log('array')
        for(let child of jsonDoc){
            console.log(child);
        }
    } else if(typeof jsonDoc ==="object"){
        console.log('objeto', jsonDoc)
        for(let child in jsonDoc){
            console.log(child);
        }
    }
}

/**
 * Percorre a composição de nós de HTML para gerar o HTML devidamente estruturado.
 * 
 * @param {*} indent indentação a ser feita a cada nó.
 * @param {*} node nó primario que compõe os subnós
 */

function traverse(indent, node) {
    const atualIndentation = indent;
    log.add(Array(indent++).join("  ") + node.getOpenTag());

    for (var i = 0, len = node.children.length; i < len; i++) {
        traverse(indent, node.getChild(i));
    }
    const OPENTAGS = ["!DOCTYPE", "img", "br", "hr", "link"];
    if(!OPENTAGS.includes(node.name)){
        log.add(Array(atualIndentation).join("  ") + node.getCloseTag());
    }
}

//let nodes = jsonNodeToHtmlNode(jsonDoc);

// logging helper
var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();
/*
for(node of nodes){
    traverse(1, node);
    log.show();
}
*/

fs.writeFileSync(path.resolve(__dirname, "index.html"), html);
//console.log(html);
function HTML(json){    
    let nodes = jsonNodeToHtmlNode(json);
    let logs= []
    for(node of nodes){
        traverse(0, node);
        logs.push(log);
        log="";
    }
    return logs.join("");
}

module.exports ={HTML}