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
});