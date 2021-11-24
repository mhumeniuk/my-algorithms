/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
//TODO: literaly write code on paper first!!
var shortestDistance = function(wordsDict, word1, word2) {
    let steps = 0;
    let distances = [];
    let startingWord = null;
    for (let i = 0; i < wordsDict.length; i++) {
        if(wordsDict[i] == word1 || wordsDict[i] == word2) {
           if (startingWord !== null) { //we went to the end
               if (startingWord !== wordsDict[i]) {
                   distances.push(steps);
               }
               steps = 1;
               startingWord = wordsDict[i];
           }
           else {
               steps = 1;
               startingWord = wordsDict[i];
           }
        }
        else if (startingWord !== null) {
            steps ++;
        }
    }
    return Math.min(...distances);
};