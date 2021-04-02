var Node = function (name) {
    this.children = [];
    this.name = name;
}

Node.prototype = {
    add: function (child) {
        this.children.push(child);
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

    getChild: function (i) {
        return this.children[i];
    },

    hasChildren: function () {
        return this.children.length > 0;
    }
}

// recursively traverse a (sub)tree

function traverse(indent, node) {
    log.add(Array(indent++).join("--") + node.name);

    for (var i = 0, len = node.children.length; i < len; i++) {
        traverse(indent, node.getChild(i));
    }
}

// logging helper

var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();

function run() {
    var html = new Node("html");
    var head = new Node("head")
    var link = new Node("link");
    var title = new Node("title");
    var body = new Node("body");
    var div = new Node("div");
    var p = new Node("p");
    var a = new Node("a");

    html.add(head);
    head.add(link);
    head.add(title)
    html.add(body);
    body.add(div);
    div.add(p);
    div.add(a);

    traverse(1, html);

    log.show();
}

run()