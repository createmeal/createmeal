import NodeFactory from "./composite/NodeFactory.js";

export function toHtml(json, options={}){    
    const nodeFactory = new NodeFactory(options);
    let nodes = nodeFactory.createMainNodes(json);
    if(nodes.length===0){
        return json;
    }
    let htmls= []
    for(const node of nodes){
        htmls.push(node.toHtml());
    }
    return htmls.join("");
}

const createmeal = { toHtml }
export default createmeal;