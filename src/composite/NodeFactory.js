import attrs from "../attributes.js";
import openTags from "../openTags.js";

import Node from "./Node.js";
import StringNode from "./StringNode.js";
import OpenTagNode from "./OpenTagNode.js";

export default class NodeFactory {

    constructor(options={}){
        this.options = options;
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
                if(this.isAttr(key, entryValue)){
                    continue;
                }
                if(this.isFieldRepresentingAttributes(key)){
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
    isFieldRepresentingAttributes(objectFieldKey) {
        if(objectFieldKey.startsWith("_"))
            return true;
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
            }
        }
    }

}