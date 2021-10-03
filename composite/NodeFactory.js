var attrs = require('../attributes.json');
var openTags = require('../openTags.json');
var Node = require('./Node.js');
const AttrNode = require('./AttrNode.js');
const StringNode = require('./StringNode.js');
const OpenTagNode = require('./OpenTagNode.js');
class NodeFactory {

    static getNode(value){
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
            //validation to prevent processing a value that represents an attribute as a child
            if(this.isAttr(value)){
               return;
            }
            let nodes = [];          
            for(let [key, entryValue] of Object.entries(value)){
                if(key==="attributes"){
                    /**
                     * TODO:return; susbtituido o return por um continue para que o codigo continue a tratar os demais children. necessario validar.
                     * 
                     */
                    continue;
                }  
                let node;
                if(openTags[key])
                    node = new OpenTagNode(key);
                else {
                    node = new Node(key);
                    let children  = this.getNode(entryValue);
                    node.addChildren(children);
                }
                let attrs  = this.getAttrs(entryValue);
                if(attrs && attrs.length>0)
                    for(const attr of attrs)
                        node.setAttribute(attr.key, attr.value);  
                nodes.push(node);      
            }    
            return nodes;
        }        
    }

    static getObjectNode(name){
        return new Node(name); 
    }

    static getAttrs(value, skipAttrValidation=false){
        if(!value)
            return;
        let attrs = [];
        if(Array.isArray(value)){
            for(const item of value){
                if(item==="attributes"){
                    return NodeFactory.processAttributeArray(item);
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
                if(key==="attributes"){
                    return NodeFactory.processAttributeArray(entryValue);
                }  
                if(skipAttrValidation||this.isAttr(key, entryValue))
                    attrs.push({"key":key,"value":entryValue});    
                else
                    attrs = this.getAttrs(entryValue);
            }
        }        
        return attrs;
    }

    static processAttributeArray(value) {
        let attrs = [];
        for (const attr of value) {
            attrs =attrs.concat(this.getAttrs(attr, true));
        }
        return attrs;
    }

    static isAttr(name, value=""){
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
module.exports = NodeFactory;