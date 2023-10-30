//Problem 1

function addToZero(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] + array[i] === 0) {
        return true;
      }
    }
    return false;
  }

 -- O(N)

//Problem 2

function hasUniqueCharacters(string) {
    const stringValue = [];
    for (let i = 0; i < string.length; i++) {
      if (stringValue.includes(string[i])) {
        return false;
      }
      stringValue.push(word[i]);
    }
    return true;
}

-- O(1)

//Problem 3

const test = (string) => {
    if (typeof string !== 'string') {
      return 'It must be a string.'
    }
    const result = new Set()
    for (const ch of string.toUpperCase()) 
    {
      if (/[A-Z]/.test(ch)) 
      {
          result.add(ch)
      }
    }
    return result.size === 26
  }

-- O(1)

//PROBLEM 4

function findLongestWord(array) {
  let longestWord = "";
  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

-- O(N)