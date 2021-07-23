class Node {
    constructor(name){
        this.children = [];
        this.attributes = [];
        this.name = name;
    }

    add(child) {
        this.children.push(child);
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
        return `<${this.name} ${this.getAttributes()}>`;
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
  
}

module.exports=Node;