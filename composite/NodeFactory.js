var attr = require('../attributes.json');
var Node = require('./Node.js');
const AttrNode = require('./AttrNode.js');
const StringNode = require('./StringNode.js');
class NodeFactory {

    static getNode(value){
        if(typeof value  === 'string'|| value instanceof String){
            return new StringNode(value);
        }        
        if(attr){
            return new Node(attr);
        }
    }

}
module.exports = NodeFactory;