/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
  const rows = ['qwertyuiop', 'asdfghjkl','zxcvbnm'];
  return words.filter((w) => rows.some((r) => w.toLowerCase().split("").every(c => r.includes(c))));
};