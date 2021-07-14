const UsernameData = require('../data/index.js');

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
        if (config.adjectives) this.adjectives = UsernameData.animals;
        if (config.verbs) this.verbs = UsernameData.verbs;
        if (config.nouns) this.nouns = UsernameData.nouns;
        if (config.animals) this.animals = UsernameData.animals;
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
        // const res = JSON.parse(array);
        const res = array;
        const min = 0;
        const max = res.length - 1;
        const random = Math.floor(Math.random() * (max - min) + min);
        return res[random];
    }
}

module.exports = Username;
