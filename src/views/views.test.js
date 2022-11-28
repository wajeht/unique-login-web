import { expect, it, describe } from 'vitest';
import { Builder, By, until } from 'selenium-webdriver';

import constants from '../config/constants.js';
import { splitStringOnUpperCase } from '../utils/helpers.js';
import { adjectives as Adjectives } from '../data/index.js';
import { animals as Animals } from '../data/index.js';

const driver = await new Builder().forBrowser('chrome').build();

describe('when opening chrome and  visiting home page', () => {
  it('should generate expected output', async () => {
    try {
      await driver.get(`http://localhost:${constants.PORT}`);

      // clear input
      await driver.findElement(By.id('length-input')).clear();

      // type in 30
      await driver.findElement(By.id('length-input')).sendKeys('30');

      // click generate
      await driver.findElement(By.id('generate-button')).click();

      // check the result
      await driver.wait(until.elementLocated(By.id('username-text')), 500, 'x', 500).then((el) =>
        el.getText().then((x) => {
          const [adjective, animal] = splitStringOnUpperCase(x);
          expect(Animals.includes(animal)).toBeTruthy();
          expect(Adjectives.includes(adjective)).toBeTruthy();
        }),
      );
    } finally {
      driver.quit();
    }
  });
});
