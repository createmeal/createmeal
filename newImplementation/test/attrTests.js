const jsml = require('../index')
const assert = require('./assert')

/**
 * html tag with attribute
{
    html:{
        
    }
}
<html></html>*/
assert.assert(jsml.toHtml({"html":{"lang":"pt-BR"}}), '<html lang="pt-BR"></html>', "html tag with attr");
/**
 * DOCTYPE tag with html attribute
*/
assert.assert(jsml.toHtml({"!DOCTYPE html":null}), '<!DOCTYPE html>', "!DOCTYPE tag with html attr");