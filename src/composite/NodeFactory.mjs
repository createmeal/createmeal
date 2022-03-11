import selfClosingTags from "../selfClosingTags.mjs";
import Node from "./Node.mjs";
import StringNode from "./StringNode.mjs";
import SelfClosingTag from "./SelfClosingTag.mjs";
import AttributeFactory from "./AttributeFactory.mjs";

export default class NodeFactory {

    constructor(options={}){
        this.options = options;
        this.attributeFacotory = new AttributeFactory(options);
    }

    /**
     * check main node if it is an object or array
     * to call right method to create nodes.
     * @param {[]|{}} jsonDoc 
     */
    createMainNodes(jsonDoc){
        let nodes = [];
        if(Array.isArray(jsonDoc)){
            nodes = this.createNodesFromArray(jsonDoc, nodes);
        } else if(typeof jsonDoc ==="object"){
            nodes = this.createNodesFromObject(jsonDoc, nodes);
        }
        else if (typeof jsonDoc ==="string"){
            const response = this.tryParseObject(jsonDoc);
            if(typeof response === "object"){
                nodes = this.createNodesFromObject(response, nodes);
            }
        }
        return nodes;
    }
    tryParseObject(jsonDoc){
        try {
            return JSON.parse(jsonDoc);
        } catch {
            return jsonDoc;
        }
    }
    /**
     * Iterates over a jsonDoc array to extract nodes
     * @param {[]} jsonDoc 
     * @param {[]} nodes 
     * @returns nodes
     */
    createNodesFromObject(jsonDoc, nodes) {
        nodes = nodes.concat(this.getNodes(jsonDoc));
        return nodes;
    }

    /**
     * Get children of jsonDoc objec to
     * create nodes
     * @param {{}} jsonDoc 
     * @param {[]} nodes 
     * @returns nodes
     */
    createNodesFromArray(jsonDoc, nodes) {
        for (const child of jsonDoc) {
            nodes = nodes.concat(this.getNodes(child));
        }
        return nodes;
    }

    /**
     * 
     * @param {{}|[]|string} value 
     * @param {Node[]}  nodes
     */
    getNodes(value){
        if(typeof value  === 'string'|| value instanceof String){
            return [new StringNode(value)];
        }        
        if(Array.isArray(value)){
            let nodes = []; 
            for(const child of value){
                nodes = nodes.concat(this.getNodes(child));
            }
            return nodes;
        } else if(typeof value === 'object'){            
            let nodes = [];  
            // handle a null attribute
            if(value === null) {
                return nodes;
            }
            for(let [key, entryValue] of Object.entries(value)){
                //validation to prevent processing a value that represents an attribute as a child
                //when wants handler only children                
                if(this.attributeFacotory.isFieldRepresentingAttributes(key,entryValue)){
                    continue;
                }  
                let node;            
                if(this.isSelfClosingTag(key))
                    node = new SelfClosingTag(key);
                else {
                    node = new Node(key);
                    node.addChildren(this.getNodes(entryValue));
                }
                this.attributeFacotory.setNodeAttributes(node, entryValue);  
                nodes.push(node);      
            }    
            return nodes;
        }        
    }

    isSelfClosingTag(key) {
        return selfClosingTags[key.split(' ')[0]] !== undefined;
    }
}