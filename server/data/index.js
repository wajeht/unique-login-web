const fs = require('fs');
const path = require('path');

/**
 * @param {Array}
 */
function getFileLink(json) {
	try {
		const rawData = fs.readFileSync(path.resolve(__dirname, json));
		const result = JSON.parse(rawData);
		return result;
	} catch (error) {
		console.log({ error: error });
	}
}

module.exports = {
	animals: getFileLink('animals.json'),
	adjectives: getFileLink('adjectives.json'),
	nouns: getFileLink('nouns.json'),
	verbs: getFileLink('verbs.json'),
};
