'use strict';

// adding in non-integers to ensure the logic below only pushers to array if the item at the index is a number.
let exampleArray = ['cat', 1, 2, 2, 3, 4, 5, 6, 10, 20, 50, 100, 500, 'dog', {}, true];

function waveArray(array) {
  if (!array.length) throw new Error('No input.');

  //firstArray there to remove non-number values before sorting and then push the values to the answerArray
  let firstArray = [];
  let answerArray = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof(array[i]) === 'number') {
      firstArray.push(array[i]);
    }
  }
  firstArray = firstArray.sort(function(a, b) {
    return b - a;
  });
  let length = firstArray.length -1;

  for(let i = 0, j = length; i <= firstArray.length / 2, j >= firstArray.length / 2; i++, j--) {
    answerArray.push(firstArray[i]);
    answerArray.push(firstArray[j]);
  }
  return answerArray;
}

console.log(waveArray(exampleArray));
