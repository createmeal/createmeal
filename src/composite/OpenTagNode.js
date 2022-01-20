import Node from "./Node.js";
export default class OpenTagNode extends Node {
    constructor(name){
        super(name);
    }
    /* eslint-disable no-unused-vars */
    add(child) {
        
    }
    /* eslint-enable no-unused-vars */
    getCloseTag(){
        return "";
    }

}