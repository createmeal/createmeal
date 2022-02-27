export default class Node {
    constructor(name){
        this.children = [];
        this.attributes = [];
        this.name = name;
    }

    add(child) {
        this.children.push(child);
    }
    addChildren(child) {
        if(Array.isArray(child)&&child&&child.length>0)
            this.children = this.children.concat(child);
        else if(!Array.isArray(child) && typeof child==='object')
            this.add(child);
        
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

    remove(child) {
        let length = this.children.length;
        for (let i = 0; i < length; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
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

    hasChildren() {
        return this.children.length > 0;
    }

    toHtml(){
        let htmlChildren = [];
        for (let i = 0, len = this.children.length; i < len; i++) {
            htmlChildren.push(this.getChild(i).toHtml());
        }
        return this.getOpenTag() + htmlChildren.join("") + this.getCloseTag();
    }
  
}