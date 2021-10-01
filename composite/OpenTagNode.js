var Node = require('./Node');
class OpenTagNode extends Node {
    constructor(name){
        super(name);
    }

    add(child) {
    }

    getCloseTag(){
        return "";
    }

}
module.exports = OpenTagNode;