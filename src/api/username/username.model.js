import * as data from '../../data/index.js';

export default class Username {
  /**
   * The constructor function takes in a config object and sets the class properties to the values of the
   * config object
   * @param [config] - This is the configuration object that you pass in when you create a new instance
   * of the class.
   */
  constructor(
    config = {
      adjectives: true,
      verbs: true,
      nouns: true,
      animals: true,
    },
  ) {
    if (config.adjectives) this.adjectives = data.animals;
    if (config.verbs) this.verbs = data.verbs;
    if (config.nouns) this.nouns = data.nouns;
    if (config.animals) this.animals = data.animals;
  }

  /**
   * > It returns a random element from each of the arrays in the object, if they exist
   * @returns A random username is being returned.
   */
  getUsername() {
    let username = '';

    username += 'adjectives' in this ? this.#getRandomElementFromAnArray(this.adjectives) : '';
    username += 'verbs' in this ? this.#getRandomElementFromAnArray(this.verbs) : '';
    username += 'nouns' in this ? this.#getRandomElementFromAnArray(this.nouns) : '';
    username += 'animals' in this ? this.#getRandomElementFromAnArray(this.animals) : '';

    return username;
  }

  /**
   * It takes an array as an argument and returns a random element from that array
   * @param array - The array from which you want to get a random element.
   * @returns a random element from the array.
   */
  #getRandomElementFromAnArray(array) {
    // const res = JSON.parse(array);
    const res = array;
    const min = 0;
    const max = res.length - 1;
    const random = Math.floor(Math.random() * (max - min) + min);
    return res[random];
  }
}
