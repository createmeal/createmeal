import createmeal,{toHtml} from '../src/index.js';
import assert from 'assert';
import {describe,it} from "mocha";


describe("Attributes",function(){
  describe("boolean attributes",function(){
      it("Should return a tag with boolean attribute for object value input",function(){
          assert.equal(
              createmeal.toHtml({
                  a: {
                      _hidden: {}
                  }
              }),
              `<a hidden></a>`
          );
      })
      it("Should return a tag with boolean attribute for array value input",function(){
          assert.equal(
              createmeal.toHtml({
                  a: {
                      _hidden: []
                  }
              }),
              `<a hidden></a>`
          );
      })
      it("Should return a tag with boolean attribute for null value input",function(){
          assert.equal(
              createmeal.toHtml({
                  a: {
                      _hidden: null
                  }
              }),
              `<a hidden></a>`
          );
      })
      it("Should return a tag with boolean attribute for undefined value input",function(){
          assert.equal(
              createmeal.toHtml({
                  a: {
                      _hidden: undefined
                  }
              }),
              `<a hidden></a>`
          );
      })
      it("Should return a tag with boolean attribute for string value input",function(){
          assert.equal(
              createmeal.toHtml({
                  a: {
                      _hidden: "_hidden"
                  }
              }),
              `<a hidden></a>`
          );
      })
      it("Should return a tag with boolean attribute for number value input",function(){
          assert.equal(
              createmeal.toHtml({
                  a: {
                      _hidden: 0
                  }
              }),
              `<a hidden></a>`
          );
      })
  })
  describe("other cases",function(){
    it("Should return a HTML tag with an attribute",function(){
      assert.equal(toHtml({"html":{"lang":"pt-BR"}}), '<html lang="pt-BR"></html>');
    })
    it("Should return a !DOCTYPE tag with HTML attribute",function(){
      assert.equal(createmeal.toHtml({"!DOCTYPE html":null}), '<!DOCTYPE html>');
    })
    it("Should return a DIV tag with class attribute",function(){
      assert.equal(createmeal.toHtml({"div":{"class":"btn btn-danger"}}), '<div class="btn btn-danger"></div>');
    })
    it("should return a DIV tag with many attributes",function(){
      const template = {"div":{"attributes":[{"style":"width:50%"}, {"class":"btn btn-danger"}, {"height":"50px"}]}};
      const expected ='<div style="width:50%" class="btn btn-danger" height="50px"></div>'
      assert.equal(createmeal.toHtml(template), expected);
    })
    it("Should return a !DOCTYPE tag with custom attribute",function(){
      const template = {"!DOCTYPE":{"attributes":[{"html":null}, {"attr-personalizado":"valor-attr"}]}};
      const expected ='<!DOCTYPE html attr-personalizado="valor-attr">'
      assert.equal(createmeal.toHtml(template), expected);
    })
    it("Should return a !DOCTYPE tag with custom attribute declared with '_' charactere",function(){
      const template = {"!DOCTYPE":{"_html":null, "_attr-personalizado":"valor-attr"}};
      const expected ='<!DOCTYPE html attr-personalizado="valor-attr">'
      assert.equal(createmeal.toHtml(template), expected);
    })
    it("Should return tags with custom attributes declared with '_' charactere",function(){
      const template = {
        "!DOCTYPE": {
            "_html":null,
            "_attr-personalizado":"valor-attr"
            },
        "html": {
          "_option":"personalized"
        }
      }
      const expected ='<!DOCTYPE html attr-personalizado="valor-attr"><html option="personalized"></html>'
      assert.equal(createmeal.toHtml(template), expected);
    })
    it("Should return a !DOCTYPE with custom attribute declared with 'attr-' prefix",function(){
      const template = {
          "!DOCTYPE": {
              "attributes":[
                  {"html":null}, 
                  {"attr-personalizado":"valor-attr"}
              ]},
          "html": {
          }
      }
      const expected ='<!DOCTYPE html attr-personalizado="valor-attr"><html></html>'
      assert.equal(createmeal.toHtml(template), expected);
    })
    it("Should return an HTML with BODY tag with class attribute",function(){
      const template = [{
         "html":{
           "body":{
             "class": "container"
           }
         }
       }];
       const expected = '<html><body class="container"></body></html>';
       assert.equal(createmeal.toHtml(template), expected);
    })
    it("Should return an HTML tag with a body with class and event attributes",function(){
      const template = [{
       "html":{
         "body":{
           "onload":"callSomeBehavior()",
           "class": "container"
         }
       }
     }];
     const expected = '<html><body onload="callSomeBehavior()" class="container"></body></html>';
     assert.equal(createmeal.toHtml(template), expected);
    })
  })
})