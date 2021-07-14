const fs = require('fs');
const path = require('path');

/**
 * @param {Array}
 */
function getFileLink(json) {
    let rawdata = fs.readFileSync(path.resolve(__dirname, json));
    let student = JSON.parse(rawdata);
    return student;
}

module.exports = {
    animals: getFileLink('animals.json'),
    adjectives: getFileLink('adjectives.json'),
    nouns: getFileLink('nouns.json'),
    verbs: getFileLink('verbs.json'),
};
