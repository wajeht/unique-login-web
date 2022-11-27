/**
 * Split a string into an array of words, where each word starts with an uppercase letter.
 * @param params - The string to split.
 * @returns An array of strings
 */
export function splitStringOnUpperCase(params) {
  return params.match(/[A-Z][a-z]+/g);
}
