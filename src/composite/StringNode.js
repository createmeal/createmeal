import Node from "./Node.js";
export default class StringNode extends Node {
    constructor(name){
        super(name);
    }

    /* eslint-disable no-unused-vars */
    add(child) {
        
    }

    getOpenTag(){
        return this.name;
    }

    getCloseTag(){
        return "";
    }

}