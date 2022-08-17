console.log = function() {};

const fs = require('fs');
const code = fs.readFileSync('style.css', 'utf8');
const assert = require('chai').assert;


  // step 1: CSS regex 
const marginTopRegex = /\.answer:active\s*{[^}]*margin-top\s*:\s*24px\s*;\s*[^}]*}/ // put your css selectors here
const marginBottomRegex = /\.answer:active\s*{[^}]*margin-top\s*:\s*24px\s*;\s*[^}]*}/
const boxShadowRegex = /\.answer:active\s*{[^}]*box-shadow\s*:\s*0px\s*0px\s*;\s*[^}]*}/
const bgColorRegex = /\.answer:active\s*{[^}]*background-color\s*:\s*#C0D6DF\s*;\s*[^}]*}/i
const colorRegex = /\.answer:active\s*{[^}]*color\s*:\s*#(fff){1,2}\s*;\s*[^}]*}/i

describe('', function () {
  it('', function () {
    let found = marginTopRegex.test(code);
    assert.strictEqual(found, true, 'Did you set the `margin-top` property to `24px` for `.answer:active`?');
    found = marginBottomRegex.test(code);
    assert.strictEqual(found, true, 'Did you set the `margin-bottom` property to `16px` for `.answer:active`?');
    found = boxShadowRegex.test(code);
    assert.strictEqual(found, true, 'Did you set the `box-shadow` property to `0px 0px` for `.answer:active`?');
    found = bgColorRegex.test(code);
    assert.strictEqual(found, true, 'Did you set the `background-color` property to `#C0D6DF` for `.answer:active`?');
    found = colorRegex.test(code);
    assert.strictEqual(found, true, 'Did you set the `color` property to `#ffffff` for `.answer:active`?');
  });
});