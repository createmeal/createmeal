import NodeFactory from "./composite/NodeFactory.js";

export function toHtml(json){    
    const nodeFactory = new NodeFactory();
    let nodes = nodeFactory.createMainNodes(json);
    let htmls= []
    for(const node of nodes){
        htmls.push(node.toHtml());
    }
    return htmls.join("");
}

const createmeal = { toHtml }
export default createmeal;