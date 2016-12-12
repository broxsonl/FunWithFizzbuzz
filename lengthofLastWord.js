'use strict';

// ASCII encoding
// output 0 or 1
// if it is any character other than a letter or number, it is a wordbreak
// case insensitive
// no white spaces
// only contains letters and numbers
// control for different data tyes being passed in
// if non-string type, throw an error

// isValid() is usable in this to determine if something is a valid character

let testString = 'The rain in spain?falls@@mainly?on?the plain.';

function lengthofLastWord(string) {
  if (typeof(string) !== 'string') throw new Error('Invalid input; not a string.');
  if (!string) throw new Error('Invalid input; no string.');

  let counter = 0;

  for (let i = string.length - 1; i > 0; i--) {
    if (isValid(string[i])) {
      counter += 1;
    }

    if ((!isValid(string[i])) && (counter !== 0)) {
      break;
    }
  }
  return counter;
}

function isValid(input) {
  if ((input === ' ') || (input === '.') || (input === '!') || (input === ',')) return false;
  else return true;
}

console.log(lengthofLastWord(', !! ,'));
