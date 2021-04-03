var Node = function (name) {
    this.children = [];
    this.attributes = [];
    this.name = name;
}

Node.prototype = {
    add: function (child) {
        this.children.push(child);
    },

    setAttribute(key, value){
        this.attributes.push(`${key}="${value}"`);
    },

    remove: function (child) {
        var length = this.children.length;
        for (var i = 0; i < length; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
    },

    getAttributes: function(){
        return this.attributes.join(' ');
    },

    getOpenTag: function(){
        return `<${this.name} ${this.getAttributes()}>`;
    },

    getCloseTag: function(){
        return `</${this.name}>`;
    },

    getChild: function (i) {
        return this.children[i];
    },

    hasChildren: function () {
        return this.children.length > 0;
    }
}
module.exports = Node;