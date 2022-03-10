import Node from "./Node.mjs";
export default class SelfClosingTag extends Node {
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