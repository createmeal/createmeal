import attrs from "../attributes.js";
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
                if(this.isFieldRepresentingAttributes(key,entryValue)){
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
                this.setNodeAttributes(node, entryValue);  
                nodes.push(node);      
            }    
            return nodes;
        }        
    }

    /**
     * check if the parameter is a "attributes" field
     * or it starts with "_" representing a custom attribute
     * @param {*} objectFieldKey the name of an object field
     * @returns true if represents an attribute.
     */
    isFieldRepresentingAttributes(objectFieldKey, entryValue) {
        if(objectFieldKey.startsWith("_"))
            return true;
        if(this.isAttr(objectFieldKey, entryValue)){
            return true;
        }
        return objectFieldKey === "attributes";
    }

    setNodeAttributes(node, jsonFieldValue) {
        let attrs = this.getAttrs(jsonFieldValue);
        if (attrs && attrs.length > 0)
            for (const attr of attrs)
                node.setAttribute(attr.key, attr.value);
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

    getObjectNode(name){
        return new Node(name); 
    }

    /**
     * extracts attr of objects or arrays.
     * 
     * an object field will be considered an attribute when
     * the field name starts with "_", the name of fild is equals
     * to "attributes" and field name is in list of attribute.js
     * @param {*} value an object or array containing attributes
     * @param {*} skipAttrValidation used for the field "attributes", once these attributes must never be checked
     * @returns array of attributes
     */
    getAttrs(value, skipAttrValidation=false){
        if(!value)
            return;
        let attrs = [];
        if(Array.isArray(value)){
            for(const item of value){
                if(item==="attributes"){
                    return this.processAttributeArray(item);
                }  
                let newAttrs = this.getAttrs(item);
                if(Array.isArray(newAttrs))
                    attrs = attrs.concat(newAttrs);    
                else
                    attrs.push(newAttrs);
            }
        }
        else if(typeof value ==='object'){
            for(let [key, entryValue] of Object.entries(value)){
                if(key.startsWith("_")){
                    attrs.push({"key":key.substring(1),"value":entryValue}); 
                    continue;
                }
                if(this.isAttibutePrefix(key)){
                    attrs.push({"key":key,"value":entryValue});
                    continue;
                }
                if(key==="attributes"){
                    return this.processAttributeArray(entryValue);
                }                 
                if(skipAttrValidation||this.isAttr(key, entryValue))
                    attrs.push({"key":key,"value":entryValue});    
            }
        }        
        return attrs;
    }

    processAttributeArray(value) {
        let attrs = [];
        for (const attr of value) {
            attrs =attrs.concat(this.getAttrs(attr, true));
        }
        return attrs;
    }

    isAttr(name, value=""){
        if(attrs[name] && typeof value==="string")
            return true;
        if(typeof name === 'object'){ 
            for(let [key, entryValue] of Object.entries(name)){
                if(attrs[key]&&typeof entryValue==="string")
                    return true;
                if(this.isAttibutePrefix(name))
                    return true
            }
        }
        return this.isAttibutePrefix(name);
    }

    /**
     * attributePrefixAdd:["*", "data-", "aria-"]
     * @param {*} fieldKey 
     * @returns true or false
     */
     isAttibutePrefix(fieldKey){
        let prefixes = this.options.attributePrefixAdd;
        if(prefixes && prefixes.length>0){
            for(const prefix of prefixes){
                if(fieldKey.startsWith(prefix)){
                    return true
                }
            }
        }
        return false;
    }

}