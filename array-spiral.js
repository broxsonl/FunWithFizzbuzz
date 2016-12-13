'use strict';

let input = [
  [1, 33, 3, 14],
  [15, 16, 7, 38],
  [92, 10, 11, 12],
  [13, 14, 15, 16],
];

function arraySpiral(array) {

  let answerArray = [];

  for (let i = 0; i < array[0].length - 1; i++) {
    answerArray.push(array[0][i]);
  }

  for (let i = 0; i < array.length; i++) {
    answerArray.push(array[i][array[i.length - 1]]);
  }

  return answerArray;
}

console.log(arraySpiral(input));
