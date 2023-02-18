import Node from "./Node.mjs";
export default class SelfClosingTag extends Node {
    constructor(name){
        super(name);
        this.addChildren = undefined;
    }
    getCloseTag(){
        return "";
    }
}