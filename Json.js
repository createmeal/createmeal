'use strict';
const Tag = require('./Tag');
const ATTRIBUTES = require('./attributes.json')
const TAGS = require('./tags.json')
/**
 * Json class.
 * Represents the complete json with the metods to create tags
 * This class is prepared to create tags and its chiltren
 * @constructor
 * @param {String} json - Original parsed json.
 */

function Json(json) {
  this.json = json;
}

Json.prototype.getJson = function () {
  return this.json;
};

Json.prototype.toTag = function () {
  return this.convertNode(this.json);
};

Json.prototype.convertNode = function (jsonNode) {
  const keys = this.extractJsonKeys(jsonNode);
  if (keys.length == 0)
    return;
  var tags = [];
  for (const key of keys)
    tags.push(jsonNode[key] === "" ? this.newTag(key) : this.newTag(key, jsonNode));
  return tags;
}

Json.prototype.newTag = function (key, jsonNode) {
  if (this.jsonNodeIsEmpty(jsonNode))
    return new Tag(key);
  var objectValue = jsonNode[key];
  const content = this.extractContent(objectValue);
  delete objectValue['content'];
  const attributes = this.extractAttributes(objectValue);
  delete objectValue['attributes'];
  const children = this.extractChildren(objectValue);
  return new Tag(key, attributes, content, children);
}

Json.prototype.extractContent = function (objectValue) {
  return objectValue.content;
}

Json.prototype.extractAttributes = function (objectValue) {
  var attributes = [];
  if (objectValue.attributes)
    attributes = attributes.concat(objectValue.attributes);
  for (const attribute in objectValue) {
    if (!this.jsonNodeIsEmpty(attribute) && this.contains(ATTRIBUTES, attribute)) {
      var objectAttribute = {};
      objectAttribute[attribute] = objectValue[attribute];
      attributes.push(objectAttribute);
      delete objectValue[attribute];
    }
  };
  return attributes;
}

Json.prototype.extractChildren = function (objectValue) {
  const objectValueKeys = this.extractJsonKeys(objectValue);
  var that = this;
  const children = [];
  for (const objectValueKey of objectValueKeys) {
    if (objectValueKey === "children")
      this.createChildArray(children, objectValueKey, objectValue);
    children.push(that.newTag(objectValueKey, objectValue));
  };
  return children;
}

Json.prototype.createChildArray = function (array, objectValueKey, objectValue) {
  for (const childValue of objectValue[objectValueKey]) {
    array.push(this.convertNode(childValue));
  };
}

Json.prototype.jsonNodeIsEmpty = function (jsonNode) {
  return !jsonNode || jsonNode === undefined || jsonNode === null || Object.keys(jsonNode).length === 0;
}

Json.prototype.contains = function (arr, val) {
  var object = arr[val];
  return object !== null && object !== undefined;
}

Json.prototype.extractJsonKeys = function (jsonNode) {
  var jsonKeys = [];
  for (const key in jsonNode) {
    if (key !== null && key !== undefined && !/^[0-9]+$/.exec(key)) {
      jsonKeys.push(key);
    }
  }
  return jsonKeys;
}

Json.prototype.toHtml = function(){
  return this.toTag().join("\n")
}

Json.prototype.toString = function(){
  return this.toHtml();
}

module.exports = Json;


