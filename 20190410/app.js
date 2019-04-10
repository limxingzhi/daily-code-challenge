// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

// Entry #007 100419 (I was busy the past couple of days)

// Useful resources
// https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

const input = 'If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.';
const input2 = 'Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.';

// returns the longest word in a sentence excluding punctuations
function LongestWord(sentenceInput) {
  var words = [];
  var currentWord = '';
  var senIterator = 0;
  while (sentenceInput.length > 0) {
    if (sentenceInput.length - 1 <= 0 && currentWord != '') {
      words.push(currentWord);
    } else if (sentenceInput.charCodeAt(senIterator) != 32 &&
      sentenceInput.charAt(senIterator).toLowerCase() != sentenceInput.charAt(senIterator).toUpperCase()) {
      // 32 is the code for space
      currentWord += sentenceInput[senIterator];
    } else if (currentWord != '' || sentenceInput.length - 1 == 0) {
      // checks the end of a word or a sentence
      words.push(currentWord);
      currentWord = '';
    }
    sentenceInput = sentenceInput.slice(1);
  }

  return LongestWordInArray(words);
}

function LongestWordInArray(arrayInput, longestWord = '') {
  if (arrayInput.length <= 0) {
    return longestWord;
  }

  if (arrayInput[0].length > longestWord.length) {
    longestWord = arrayInput[0];
  }

  arrayInput.shift();

  return LongestWordInArray(arrayInput, longestWord);
}

// running the function
console.log(LongestWord(input));
console.log(LongestWord(input2));
