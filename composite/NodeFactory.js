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
        if(typeof value === 'object'){
            if(this.isAttr(value)){
                return;
            }
            let nodes = [];          
            for(let [key, entryValue] of Object.entries(value)){
                if(key==="attributes"){
                    return;
                }  
                if(openTags[key])
                    nodes.push(new OpenTagNode(key));
                else {
                    let node = new Node(key);
                    let children  = this.getNode(entryValue);
                    node.addChildren(children);
                    let attrs  = this.getAttrs(value);
                    if(attrs && attrs.length>0)
                        for(const attr of attrs)
                            node.setAttribute(attr.key, attr.value);  
                    nodes.push(node);            
                }
            }    
            return nodes;
        }        
    }

    static getObjectNode(name){
        return new Node(name); 
    }

    static getAttrs(value){
        if(!value)
            return;
        let attrs = [];
        for(let [key, entryValue] of Object.entries(value)){
            if(key==="attributes"){
                return NodeFactory.processAttributeArray(entryValue);
            }  
            if(this.isAttr(key))
                attrs.push({"key":key,"value":entryValue});    
            else
                attrs = this.getAttrs(entryValue);
        }
        return attrs;
    }

    static processAttributeArray(value) {
        let attrs = [];
        for (const attr of value) {
            attrs =attrs.concat(this.getAttrs(attr));
        }
        return attrs;
    }

    static isAttr(value){
        if(attrs[value])
            return true;
        if(typeof value === 'object'){ 
            for(let [key, entryValue] of Object.entries(value)){
                if(attrs[key])
                    return true;
            }
        } 
    }

}
module.exports = NodeFactory;