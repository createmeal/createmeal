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
});