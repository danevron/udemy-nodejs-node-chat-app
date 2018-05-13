const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('returns true on non blank strings', () => {
    expect(isRealString('Real')).toBeTruthy();
  });
  it('returns false on blank strings', () => {
    expect(isRealString(' ')).toBeFalsy();
  });
  it('returns false on non strings', () => {
    expect(isRealString(123)).toBeFalsy();
  });
});
