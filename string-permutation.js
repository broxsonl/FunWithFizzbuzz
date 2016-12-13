'use strict';

// given an array of characters, print out all of the permutations.

let testInput = ['a', 'b', 'c'];

function permuteString(str) {
  let answerArray = [];
  // initial call
  permute('', str);

  function permute(pre, suf) {
    // Once we've moved around every letter that is not the final letter, we push the result to an array
    if (suf.length === 1) return answerArray.push(pre + suf);

    for (let i = 0; i < suf.length; i++) {
      swap(0, i, suf);
      // recursive call
      permute(pre + suf[0], suf.slice(1));
    }
  }
  return answerArray;
}

function swap(a, b, arr) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

console.log(permuteString(testInput));
