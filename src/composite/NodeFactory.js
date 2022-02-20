import openTags from "../openTags.js";

import Node from "./Node.js";
import StringNode from "./StringNode.js";
import OpenTagNode from "./OpenTagNode.js";
import AttributeFactory from "./AttributeFactory.js";

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
        return nodes;
    }

    /**
     * Iterates over a jsonDoc array to extract nodes
     * @param {[]} jsonDoc 
     * @param {[]} nodes 
     * @returns nodes
     */
    createNodesFromObject(jsonDoc, nodes) {
        let newnodes = this.getNode(jsonDoc);
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
    createNodesFromArray(jsonDoc, nodes) {
        for (let child of jsonDoc) {
            let node = this.getNode(child);
            if (Array.isArray(node))
                nodes = nodes.concat(node);

            else
                nodes.push(node);
        }
        return nodes;
    }

    getNode(value){
        if(typeof value  === 'string'|| value instanceof String){
            return new StringNode(value);
        }        
        if(Array.isArray(value)){
            let nodes = []; 
            for(let child of value){
                let node = this.getNode(child);
                if(Array.isArray(node))
                    nodes = nodes.concat(node);
                else
                    nodes.push(node);
            }
            return nodes;
        } else if(typeof value === 'object'){            
            let nodes = [];          
            for(let [key, entryValue] of Object.entries(value)){
                //validation to prevent processing a value that represents an attribute as a child
                //when wants handler only children                
                if(this.attributeFacotory.isFieldRepresentingAttributes(key,entryValue)){
                    continue;
                }  
                let node;            
                if(openTags[this.isOpenTag(key)])
                    node = new OpenTagNode(key);
                else {
                    node = new Node(key);
                    let children  = this.getNode(entryValue);
                    node.addChildren(children);
                }
                this.attributeFacotory.setNodeAttributes(node, entryValue);  
                nodes.push(node);      
            }    
            return nodes;
        }        
    }

    isOpenTag(key) {
        let opentag;
        if (key) {
            let words = key.split(' ');
            if (words && words.length > 0)
                opentag = words[0];
        }
        return opentag;
    }
}