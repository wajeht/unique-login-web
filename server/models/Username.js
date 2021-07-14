const fs = require('fs');
const path = require('path');

// const animals = require('../data/animals.json');
// const nouns = require('../data/nouns.json');
// const adjectives = require('../data/adjectives.json');
// const verbs = require('../data/verbs.json');

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
        if (config.adjectives) this.adjectives = this.#getFileLink('animals.json');
        if (config.verbs) this.verbs = this.#getFileLink('verbs.json');
        if (config.nouns) this.nouns = this.#getFileLink('nouns.json');
        if (config.animals) this.animals = this.#getFileLink('animals.json');
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
     */
    #getFileLink(json) {
        const readFile = JSON.parse(
            fs.readFileSync(path.join(process.cwd(), 'data', json), 'utf8')
        );

        return readFile.slice(0);
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
