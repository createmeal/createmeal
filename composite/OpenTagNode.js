var Node = require('./Node');
class StringNode extends Node {
    constructor(name){
        super(name);
    }

    add(child) {
    }

    getCloseTag(){
        return "";
    }

}
module.exports = StringNode;