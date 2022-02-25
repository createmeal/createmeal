import assert from 'assert';
import {toHtml} from '../src/index.js';
import { describe, it } from 'mocha';

describe("Basic Strictures",function(){
    describe("01-strings and arrays",function(){
        it('Should return a clean string for a string array input', function(){
            assert.equal(toHtml(["test"]),"test");
        })
        it('Should return an empty string for an string input', function(){
            assert.equal(toHtml("test"),"");
        })
        it("Should return a P tag with string content",function(){
            assert.equal(toHtml({"p":["test"]}),'<p>test</p>');
        })
        it("Should convert an array of strings to a concatenated string",function(){
            assert.equal(toHtml({"p":["teste","de","strings"]}),'<p>testedestrings</p>');
        })
    })
    describe("02-Write HTML by string arrays",function(){
        it("Should return a tag for a string inside an array",function(){
            assert.equal(toHtml(["<!DOCTYPE>"]),'<!DOCTYPE>');
        })
        it("Should return a concatenated string from an array with tag strings",function(){
            assert.equal(toHtml(["<!DOCTYPE>", '<html lang="pt-BR"></html>']), '<!DOCTYPE><html lang="pt-BR"></html>');
        })
    })
    describe("03-Write HTML by JSON",function(){
        it("Should return a tag from an object with a field with HTML tag name",function(){
            assert.equal(toHtml({"!DOCTYPE":""}), "<!DOCTYPE>");
        })
        it("Should return '<!DOCTYPE html>' from an object with a field named as '!DOCTYPE html'",function(){
            assert.equal(toHtml({"!DOCTYPE html":""}),"<!DOCTYPE html>");
        })
        it("Should return open and close HTML tags for an object with a field HTML and empty string as value",function(){
            assert.equal(toHtml({"html":""}), "<html></html>");
        })
        it("Should return open and close HTML tags for an object with a field HTML and empty object as value",function(){
            assert.equal(toHtml({"html":{}}), "<html></html>");
        })
        it("Should return open and close HTML tags for an object with a field HTML and undefined value",function(){
            assert.equal(toHtml({"html":null}), "<html></html>");
        })
        it("Should return open and close HTML tags for an object with a field HTML and undefined value",function(){
            assert.equal(toHtml({"html":undefined}), "<html></html>");
        })
        it("Should return open and close HTML tags for an object with a field HTML and empty array as value",function(){
            assert.equal(toHtml({"html":[]}), "<html></html>");
        })
        it("Should return an HTML string with the tags !DOCTYPE and HTML from an array of objects as input",function(){
            assert.equal(toHtml([{"!DOCTYPE":""},{"html":""}]),"<!DOCTYPE><html></html>");
        })
        it("Should return an HTML string with a DIV tag inside HTML tag from an array of objects as input",function(){
            assert.equal(toHtml([{"!DOCTYPE":""},{"html":{"div":{}}}]),"<!DOCTYPE><html><div></div></html>");
        })
        it("Should return an HTML string with multible DIVs inside BODY from an array of objects as input",function(){
            assert.equal(toHtml({"body":[{"div":{}},{"div":{}}]}),"<body><div></div><div></div></body>");
        })
    })
})