import fs from 'fs/promises';
import path from 'path';

/**
 * It takes a json file name as an argument, reads the file, parses the json, and returns the result
 * @param json - The name of the json file you want to read.
 * @returns the result of the JSON.parse(rawData) function.
 */
async function getFileLink(json) {
  try {
    const p = path.resolve(path.join(process.cwd(), 'src', 'data', json));
    const rawData = await fs.readFile(p, 'utf-8');
    const result = JSON.parse(rawData);
    return result;
  } catch (error) {
    console.log({ error: error });
  }
}

export const animals = await getFileLink('animals.json');
export const adjectives = await getFileLink('adjectives.json');
export const nouns = await getFileLink('nouns.json');
export const verbs = await getFileLink('verbs.json');
