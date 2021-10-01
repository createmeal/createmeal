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
        if(attrs[value]){
            return new Node(attrs[value]);
        }
        if(typeof value === 'object'){  
            let node;          
            for(let [key, entryValue] of Object.entries(value)){
                if(openTags[key])
                    node = new OpenTagNode(key);
                else {
                    node = new Node(key);
                    let children  = this.getNode(entryValue);
                    node.add(children);
                }
            }    
            return node;
        }        
    }

    static getObjectNode(name){
        return new Node(name); 
    }

    static getAttrs(value){
        if(typeof value === 'object'){
            return new Node(value[0]);
        }        
    }

}
module.exports = NodeFactory;