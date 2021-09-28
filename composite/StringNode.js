var Node = require('./Node');
class StringNode extends Node {
    constructor(name){
        super(name);
    }

    getOpenTag(){
        return this.name;
    }

    getCloseTag(){
        return "";
    }

}
module.exports = StringNode;