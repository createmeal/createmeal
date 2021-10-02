class Node {
    constructor(name){
        this.children = [];
        this.attributes = [];
        this.name = name;
    }

    add(child) {
        this.children.push(child);
    }
    addChildren(child) {
        if(typeof child==='object')
            this.add(child);
        if(Array.isArray(child)&&child&&child.length>0)
            this.children = this.children.concat(child);
    }

    setAttribute(key, value){
        const NOVALUEATTRIBUTES=['html'];
        if(NOVALUEATTRIBUTES.includes(key)||value===null)
            this.attributes.push(`${key}`);
        else
            this.attributes.push(`${key}="${value}"`);
    }

    remove(child) {
        var length = this.children.length;
        for (var i = 0; i < length; i++) {
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
        for (var i = 0, len = this.children.length; i < len; i++) {
            htmlChildren.push(this.getChild(i).toHtml());
        }
        return this.getOpenTag() + htmlChildren.join("") + this.getCloseTag();
    }
  
}

module.exports=Node;