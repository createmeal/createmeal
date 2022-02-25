import assert from 'assert';
import createmeal from '../src/index.js';
import tags from '../src/tags.js';
describe('tag', function() {
  let testNumber="03";
  let tagName = "a";
  describe(`${testNumber} - tag "${tags[tagName].tag}": ${tags[tagName].Description}`, function() {    
    it(`${testNumber}.1 - when value is string, should set textContent`, function() {
        const input = {
            "a": "textContent value"
        }
        const expected=`<a>textContent value</a>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });
  
  testNumber=4;
  tagName = "abbr";
  describe(`${testNumber} - tag "${tags[tagName].tag}": ${tags[tagName].Description}`, function() {    
    it(`${testNumber}.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });

  testNumber=5;
  tagName = "acronym";
  describe(`${testNumber} - tag "${tags[tagName].tag}": ${tags[tagName].Description}`, function() {    
    it(`${testNumber}.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });

  testNumber=6;
  tagName = "address";
  describe(`${testNumber} - tag "${tags[tagName].tag}": ${tags[tagName].Description}`, function() {    
    it(`${testNumber}.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });

  testNumber=7;
  tagName = "applet";
  describe(`${testNumber} - tag "${tags[tagName].tag}": ${tags[tagName].Description}`, function() {    
    it(`${testNumber}.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });
  
  describe(`8 - tag "${tags["area"].tag}": ${tags["area"].Description}`, function() {
    const tagName = "area";   
    it(`8.1 - when {"area":"textContent value"}, should return: <${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });

  describe(`9 - tag "${tags["article"].tag}": ${tags["article"].Description}`, function() {
    const tagName = "article";   
    it(`9.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });

  describe(`10 - tag "${tags["aside"].tag}": ${tags["aside"].Description}`, function() {
    const tagName = "aside";   
    it(`10.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });

  describe(`11 - tag "${tags["audio"].tag}": ${tags["audio"].Description}`, function() {
    const tagName = "audio";   
    it(`11.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });

  describe(`11 - tag "${tags["audio"].tag}": ${tags["audio"].Description}`, function() {
    const tagName = "audio";   
    it(`11.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });

  describe(`12 - tag "${tags["b"].tag}": ${tags["b"].Description}`, function() {
    const tagName = "b";   
    it(`12.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });

  describe(`13 - tag "${tags["base"].tag}": ${tags["base"].Description}`, function() {
    const tagName = "base";   
    it(`13.1 - when {"area":"textContent value"}, should return: <${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });

  describe(`14 - tag "${tags["basefont"].tag}": ${tags["basefont"].Description}`, function() {
    const tagName = "basefont";   
    it(`14.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });

  describe(`15 - tag "${tags["bb"].tag}": ${tags["bb"].Description}`, function() {
    const tagName = "bb";   
    it(`15.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });

  describe(`16 - tag "${tags["bdi"].tag}": ${tags["bdi"].Description}`, function() {
    const tagName = "bdi";   
    it(`16.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });

  describe(`17 - tag "${tags["bdo"].tag}": ${tags["bdo"].Description}`, function() {
    const tagName = "bdo";   
    it(`17.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });

  describe(`18 - tag "${tags["big"].tag}": ${tags["big"].Description}`, function() {
    const tagName = "big";   
    it(`18.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });
  
  describe(`19 - tag "${tags["blockquote"].tag}": ${tags["blockquote"].Description}`, function() {
    const tagName = "blockquote";   
    it(`19.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });

  describe(`20 - tag "${tags["body"].tag}": ${tags["body"].Description}`, function() {
    const tagName = "body";   
    it(`20.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });

  describe(`21 - tag "${tags["br"].tag}": ${tags["br"].Description}`, function() {
    const tagName = "br";   
    it(`21.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });
  
  describe(`22 - tag "${tags["button"].tag}": ${tags["button"].Description}`, function() {
    const tagName = "button";   
    it(`22.1 - when {${tagName}:"textContent value"}, should return: <${tagName}>textContent value</${tagName}>`, function() {
        let input = {}
        input[tagName] = "textContent value"
        const expected=`<${tagName}>textContent value</${tagName}>`;
      assert.equal(createmeal.toHtml(input), expected);
    });   
  });
//
//
//canvas
//caption
//center
//cite
//code
//col
//colgroup
//command
//datagrid
//datalist
//dd
//del
//details
//dfn
//dialog
//dir
//div
//dl
//dt
//em
//embed
//eventsource
//fieldset
//figcaption
//figure
//font
//footer
//form
//frame
//frameset
//h1
//head
//header
//hgroup
//hr
//html
//i
//iframe
//img
//input
//ins
//isindex
//kbd
//keygen
//label
//legend
//li
//link
//map
//mark
//menu
//meta
//meter
//nav
//noframes
//noscript
//object
//ol
//optgroup
//option
//output
//p
//param
//pre
//progress
//q
//rp
//rt
//ruby
//s
//samp
//script
//section
//select
//small
//source
//span
//strike
//strong
//style
//sub
//sup
//table
//tbody
//td
//textarea
//tfoot
//th
//thead
//time
//title
//tr
//track
//tt
//u
//ul
//var
//video
//wbr
});