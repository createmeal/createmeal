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
          attributePrefixAdd:["*", "data-", "aria-"]
        }
      assert.equal(createmeal.toHtml(input,options), expected);
    });
    it('should return div with an attribute "custon-attr"', function() {
      const input = {
          div: {
              "_custon-attr":"value of a customized attr"
          }
      }
      const expected=`<div custon-attr="value of a customized attr"></div>`;
    assert.equal(createmeal.toHtml(input), expected);
  });
  });
});