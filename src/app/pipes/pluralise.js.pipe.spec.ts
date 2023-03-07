import { PluraliseJsPipe } from './pluralise.js.pipe';

describe('PluraliseJsPipe', () => {
  it('create an instance', () => {
    const pipe = new PluraliseJsPipe();
    expect(pipe).toBeTruthy();
  });
});
