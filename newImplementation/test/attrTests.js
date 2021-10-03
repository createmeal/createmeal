const jsml = require('../index')
const assert = require('./assert')

/**
 * html tag with attribute
{
    html:{
        
    }
}
<html></html>*/
assert.assert(jsml.toHtml({"html":{"lang":"pt-BR"}}), '<html lang="pt-BR"></html>', "01-html tag with attr");
/**
 * DOCTYPE tag with html attribute
*/
assert.assert(jsml.toHtml({"!DOCTYPE html":null}), '<!DOCTYPE html>', "02-!DOCTYPE tag with html attr");
/**
 * div with class
*/
assert.assert(jsml.toHtml({"div":{"class":"btn btn-danger"}}), '<div class="btn btn-danger"></div>', "03-div with class attribute");
/**
 * div with an attribute array
*/
let json= {"div":{"attributes":[{"style":"width:50%"}, {"class":"btn btn-danger"}, {"height":"50px"}]}};
let result='<div style="width:50%" class="btn btn-danger" height="50px"></div>'
assert.assert(jsml.toHtml(json), result, "04-div with attribute array");
/**
 * user defined attributes
*/
 json= {"!DOCTYPE":{"attributes":[{"html":null}, {"attr-personalizado":"valor-attr"}]}};
 result='<!DOCTYPE html attr-personalizado="valor-attr">'
assert.assert(jsml.toHtml(json), result, "05-user defined attributes");

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
assert.assert(jsml.toHtml(json), result, "06-user defined attributes - with two elements");