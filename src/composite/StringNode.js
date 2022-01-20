import Node from "./Node.js";
export default class StringNode extends Node {
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