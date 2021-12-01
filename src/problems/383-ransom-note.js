/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  let hashNote = {};
  let hashMagazine = {}
  let result = true;
  
  for (let i = 0; i < ransomNote.length; i++) {
      hashNote[ransomNote.charAt(i)] = hashNote[ransomNote.charAt(i)] || 0;
      hashNote[ransomNote.charAt(i)] += 1;
  }
  
  for (let i = 0; i < magazine.length; i++) {
      hashMagazine[magazine.charAt(i)] = hashMagazine[magazine.charAt(i)] || 0;
      hashMagazine[magazine.charAt(i)] += 1;
  }
  
  Object.keys(hashNote).forEach((key) => {
      if (typeof hashMagazine[key] === 'undefined' || hashNote[key] > hashMagazine[key]) {
          result = false     
      }
  });
  return result;
};