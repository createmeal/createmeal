import assert from 'assert';
import createmeal from '../src/index.js';
describe('Option', function() {
  describe('01-custon attribute prefix', function() {
    it('should return div with an attribute *ngIf', function() {
        const input = {
            div: {
                "*ngIf":"let i == tsField.value"
            }
        }
        const expected=`<div *ngIf="let i == tsField.value"></div>`;
        const options={
          attributesPrefixAdd:["*"]
        }
      assert.equal(createmeal.toHtml(input,), expected);
    });
  });
});