import createmeal from '../src/index.js';
import assert from './assert.js';

/**
 * html tag with attribute
{
    html:{
        
    }
}
<html></html>*/
assert.assert(createmeal.toHtml({"html":{"lang":"pt-BR"}}), '<html lang="pt-BR"></html>', "01-html tag with attr");
/**
 * DOCTYPE tag with html attribute
*/
assert.assert(createmeal.toHtml({"!DOCTYPE html":null}), '<!DOCTYPE html>', "02-!DOCTYPE tag with html attr");
/**
 * div with class
*/
assert.assert(createmeal.toHtml({"div":{"class":"btn btn-danger"}}), '<div class="btn btn-danger"></div>', "03-div with class attribute");
/**
 * div with an attribute array
*/
let json= {"div":{"attributes":[{"style":"width:50%"}, {"class":"btn btn-danger"}, {"height":"50px"}]}};
let result='<div style="width:50%" class="btn btn-danger" height="50px"></div>'
assert.assert(createmeal.toHtml(json), result, "04-div with attribute array");
/**
 * user defined attributes
*/
 json= {"!DOCTYPE":{"attributes":[{"html":null}, {"attr-personalizado":"valor-attr"}]}};
 result='<!DOCTYPE html attr-personalizado="valor-attr">'
assert.assert(createmeal.toHtml(json), result, "05-user defined attributes");

/**
 * new option for user defined attributes
*/
json= {"!DOCTYPE":{"_html":null, "_attr-personalizado":"valor-attr"}};
result='<!DOCTYPE html attr-personalizado="valor-attr">'
assert.assert(createmeal.toHtml(json), result, "05.1-new option for user defined attributes");

json = {
  "!DOCTYPE": {
      "_html":null,
      "_attr-personalizado":"valor-attr"
      },
  "html": {
    "_option":"personalized"
  }
}
result='<!DOCTYPE html attr-personalizado="valor-attr"><html option="personalized"></html>'
assert.assert(createmeal.toHtml(json), result, "05.2-new option for user defined attributes - with two elements");

json = {
    "!DOCTYPE": {
        "attributes":[
            {"html":null}, 
            {"attr-personalizado":"valor-attr"}
        ]},
    "html": {
    }
}
result='<!DOCTYPE html attr-personalizado="valor-attr"><html></html>'
assert.assert(createmeal.toHtml(json), result, "06-user defined attributes - with two elements");

/**
  * doctype, html and body with children
  */
 let input = [{
    "html":{
      "body":{
        "class": "container"
      }
    }
  }];
  let output = '<html><body class="container"></body></html>';
  assert.assert(createmeal.toHtml(input), output, "07-html with head, and head with link and title");

  /**
  * event attributes
  */
 input = [{
  "html":{
    "body":{
      "onload":"callSomeBehavior()",
      "class": "container"
    }
  }
}];
output = '<html><body onload="callSomeBehavior()" class="container"></body></html>';
assert.assert(createmeal.toHtml(input), output, "08-event Attributes");