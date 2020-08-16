'use strict';

/**
 * Tag class.
 * Represents an HTML tag with its attributes and children
 *
 * @constructor
 * @param {String} name - name of a tag.
 * @param {Any[]} attributes  - An array with all the attribute of the tag
 * @param {String} content - the textContent or value to be set inside the tag
 * @param {Any[]} children - an array of tag objects
 */

function Tag(name, attributes=[], content="", children=[]) {
  this.OPENTAGS = ["!DOCTYPE", "img", "br", "hr"];
  this.name = name;
  this.attributes = attributes;
  this.content = content;
  this.children = children;
}

Tag.prototype.getName = function() {
  return this.name;
};

Tag.prototype.appendChild = function(child){
  this.children.push(child);
};

Tag.prototype.getChildrenAsString = function(){
    let stringChildren = [];
    for(const child of this.children){
      stringChildren.push(child.toString());
    }
    return stringChildren;
};

Tag.prototype.toString = function() {
    let children = this.getChildrenAsString();
    return this.create(this.name, children, this.attributes, this.content);
};

Tag.prototype.create = function (name, children = [], options = [], content="") {
    if (this.OPENTAGS.indexOf(name) > -1) {
        return `<${name} ${options.join(" ")}>`;
    } else {
        return `<${name} ${options.join(" ")}>${content}${children.join("")}</${name}>`;
    }
}

module.exports = Tag;