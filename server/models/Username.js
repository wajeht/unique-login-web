const animals = require('../data/animals.json');
const nouns = require('../data/nouns.json');
const adjectives = require('../data/adjectives.json');
const verbs = require('../data/verbs.json');

class Username {
    /**
     * @param {Object}
     */
    constructor(
        config = {
            adjectives: true,
            verbs: true,
            nouns: true,
            animals: true,
        }
    ) {
        if (config.adjectives) this.adjectives = JSON.stringify(adjectives);
        if (config.verbs) this.verbs = JSON.stringify(verbs);
        if (config.nouns) this.nouns = JSON.stringify(nouns);
        if (config.animals) this.animals = JSON.stringify(animals);
    }

    /**
     * @param {Object}
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
     * @param {Array}
     * @returns {String}
     */
    #getRandomElementFromAnArray(array) {
        const res = JSON.parse(array);
        const min = 0;
        const max = res.length - 1;
        const random = Math.floor(Math.random() * (max - min) + min);
        return res[random];
    }
}

module.exports = Username;
