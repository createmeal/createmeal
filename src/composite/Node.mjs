export default class Node {
    constructor(name){
        this.children = [];
        this.attributes = [];
        this.name = name;
    }

    /**
     * Append an array of children to the Node
     * @param {Node[]} children An array of Nodes
     */
    addChildren(children) {
        if(Array.isArray(children)&&children.length>0){
            this.children = this.children.concat(children);
        }
    }
    /**
     * 
     * @param {string} key attribute name
     * @param {*} value Must not be set for boolean attributes
     */
    setAttribute(key, value){
        if(!value)
            this.attributes.push(`${key}`);
        else
            this.attributes.push(`${key}="${value}"`);
    }

    getAttributes(){
        return this.attributes.join(' ');
    }

    getOpenTag(){
        if(this.attributes.length>0)
            return `<${this.name} ${this.getAttributes()}>`;
        else
            return `<${this.name}>`;
    }

    getCloseTag(){
        return `</${this.name}>`;
    }

    getChild(i) {
        return this.children[i];
    }

    toHtml(){
        let htmlChildren = [];
        for (let i = 0, len = this.children.length; i < len; i++) {
            htmlChildren.push(this.getChild(i).toHtml());
        }
        return this.getOpenTag() + htmlChildren.join("") + this.getCloseTag();
    }
  
}