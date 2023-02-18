import Node from "./Node.mjs";
export default class StringNode extends Node {
    constructor(name){
        super(name);
        this.addChildren = undefined;
    }

    getOpenTag(){
        return this.name;
    }

    getCloseTag(){
        return "";
    }

}