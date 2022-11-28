import { expect, it, describe } from 'vitest';
import { splitStringOnUpperCase } from './helpers.js';

describe('give a string of pascal case', () => {
  it('should return array with split items on uppercase words', () => {
    expect(splitStringOnUpperCase('HelloHowAreYouDoing').sort()).toEqual(
      ['Hello', 'How', 'Are', 'You', 'Doing'].sort(),
    );
  });
});
