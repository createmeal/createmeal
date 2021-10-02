const NodeFactory = require('../composite/NodeFactory.js')

const OPENTAGS = ["!DOCTYPE", "img", "br", "hr", "link"];

/**
 * Metodo responsavel por ler o Json e converter para html Nodes
 * 
 * O retorno é o array de nós de html a ser percorrido afim de gerar o HTML.
 * @param {*} jsonDoc - json que representa o HTML 
 * @returns array de nós do html.
 */
 function jsonNodeToHtmlNode(jsonDoc){
    let nodes = foreEachNode(jsonDoc);
    return nodes;
}

/**
 * responsible for iterate all json nodes independing if is object or array.
 * @param {*} jsonDoc 
 */
function foreEachNode(jsonDoc){
    let nodes = [];
    if(Array.isArray(jsonDoc)){
        for(let child of jsonDoc){
            let node = NodeFactory.getNode(child);
            if(Array.isArray(node))
                nodes = nodes.concat(node);
            else
                nodes.push(node);
        }
    } else if(typeof jsonDoc ==="object"){
        let newnodes = NodeFactory.getNode(jsonDoc);
        if(Array.isArray(newnodes))
            nodes = nodes.concat(newnodes);
        else
            nodes.push(newnodes);
    }
    return nodes;
}

function toHtml(json){    
    let nodes = jsonNodeToHtmlNode(json);
    let htmls= []
    for(node of nodes){
        htmls.push(node.toHtml());
    }
    return htmls.join("");
}

module.exports ={toHtml}