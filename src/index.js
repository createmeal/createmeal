import NodeFactory from "./composite/NodeFactory.js";

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
 * check main node if it is an object or array
 * to call right method to create nodes.
 * @param {[]|{}} jsonDoc 
 */
function foreEachNode(jsonDoc){
    const nodeFactory = new NodeFactory();
    let nodes = [];
    if(Array.isArray(jsonDoc)){
        nodes = createNodesFromArray(jsonDoc, nodeFactory, nodes);
    } else if(typeof jsonDoc ==="object"){
        nodes = createNodesFromObject(nodeFactory, jsonDoc, nodes);
    }
    return nodes;
}

/**
 * Iterates over a jsonDoc array to extract nodes
 * @param {[]} jsonDoc 
 * @param {[]} nodes 
 * @returns nodes
 */
function createNodesFromObject(nodeFactory, jsonDoc, nodes) {
    let newnodes = nodeFactory.getNode(jsonDoc);
    if (Array.isArray(newnodes))
        nodes = nodes.concat(newnodes);

    else
        nodes.push(newnodes);
    return nodes;
}

/**
 * Get children of jsonDoc objec to
 * create nodes
 * @param {{}} jsonDoc 
 * @param {[]} nodes 
 * @returns nodes
 */
function createNodesFromArray(jsonDoc, nodeFactory, nodes) {
    for (let child of jsonDoc) {
        let node = nodeFactory.getNode(child);
        if (Array.isArray(node))
            nodes = nodes.concat(node);

        else
            nodes.push(node);
    }
    return nodes;
}

export function toHtml(json){    
    let nodes = jsonNodeToHtmlNode(json);
    let htmls= []
    for(const node of nodes){
        htmls.push(node.toHtml());
    }
    return htmls.join("");
}

const createmeal = { toHtml }
export default createmeal;