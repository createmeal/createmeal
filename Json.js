'use strict';
const Tag = require('./Tag');
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
  const keys = Object.keys(jsonNode);
  if (keys.length == 0)
    return;
  var tags = [];
  for (const key of keys)
    tags.push(jsonNode[key] === "" ? this.newTag(key) : this.newTag(key, jsonNode));
  return tags;
}

Json.prototype.newTag = function(key, jsonNode) {
  if (this.jsonNodeIsEmpty(jsonNode))
    return new Tag(key);
  var objectValue = jsonNode[key];
  const attributes = objectValue.attributes;
  const content = objectValue.content;
  delete objectValue['content'];
  delete objectValue['attributes'];
  const objectValueKeys = Object.keys(objectValue);
  var that = this;
  const children = objectValueKeys.map(function (objectValueKey) {
    return that.newTag(objectValueKey, objectValue);
  });
  return new Tag(key, attributes, content, children);
}

Json.prototype.jsonNodeIsEmpty = function (jsonNode){
  return !jsonNode || jsonNode === undefined || jsonNode === null || Object.keys(jsonNode).length === 0;
}

module.exports = Json;


