import { toHtml } from '../src/index.mjs';
import assert from 'assert';
import {describe,it} from "mocha";

describe("Children",function(){
  it("Should return a HTML tag with a DIV child",function(){
    assert.equal(toHtml({"html":{"div":{}}}),"<html><div></div></html>");
  })
  it("Should return a HTML tag with a HEAD child",function(){
    assert.equal(toHtml({"html":{"head":{}}}), "<html><head></head></html>");
  })
  it("Should return a HTML tag with HEAD and BODY children",function(){
    assert.equal(toHtml({"html":{"head":{}, "body":{}}}), "<html><head></head><body></body></html>");
  })
  it("Should return a HTML tag with HEAD, BODY and a BODY child",function(){
    const template = {"html":{"head":{}, "body":{"div":{}}}};
    const expected = "<html><head></head><body><div></div></body></html>";
    assert.equal(toHtml(template), expected);
  })
  it("Should return a basic HTML template",function(){
    const template = [{"!DOCTYPE html":""},{"html":{"head":{}, "body":{"div":{}}}}];
    const expected = "<!DOCTYPE html><html><head></head><body><div></div></body></html>";
    assert.equal(toHtml(template), expected);
  })
  it("Should return a HTML template with HEAD children",function(){
    const template = [{
      "html":{
        "head":{
          "link": {},
          "title": {}
        }
      }
    }];
    const expected = "<html><head><link><title></title></head></html>";
    assert.equal(toHtml(template), expected);
  })
  it("Should return a HTML template with HEAD children. A LINK tag with ref attribute",function(){
    const template = [{
     "html":{
       "head":{
         "link ref": {},
         "title": {}
       }
     }
   }];
   const expected = "<html><head><link ref><title></title></head></html>";
   assert.equal(toHtml(template), expected);
  })
  it("Should return a BODY tag with children",function(){
    const template = {
        "body":{
          "class": "container",
          "h1": {}
        }
    };
    const expected = '<body class="container"><h1></h1></body>';
    assert.equal(toHtml(template), expected);
  })
})