'use strict';
const Tab = require('./Tag');
const Tag = require('./Tag');
/**
 * Json class.
 * Represents the complete json
 *
 * @constructor
 * @param {String} json - name of a tag.
 */

function Json(json) {
    this.json = json;
}

Tag.prototype.getJson = function () {
  return this.json;
};

Tag.prototype.toTag = function () {
  return this.convertNode(this.json);
};

Tag.prototype.convertNode = function(jsonNode) {
    const keys = Object.keys(jsonNode);
    if (keys.length == 0)
      return;
    const key = keys[0];
    return jsonNode[key] === "" ? this.newTag(key): this.newTag(key, jsonNode);
  }  

Tag.prototype.newTag = function(key, jsonNode){
    var objectValue = jsonNode[key];
    const attributes = objectValue.attributes;
    const content = objectValue.content;
    objectValue.splice('content', 1);
    objectValue.splice('attributes', 1);
    const objectValueKeys = Object.keys(objectValue);
    if (objectValueKeys.length === 0)
        return;
    const children = objectValueKeys.map(function(objectValueKey){
        return this.newTag(objectValueKey, objectValue[objectValueKey]);
    });
    return new Tag(key, attributes, content, children);
}

module.exports = Tag;