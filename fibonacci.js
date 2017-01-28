'use strict';

// inefficient way to use recursion to determine what the nth number in the sequence is
function fibonacci(n) {
  if(n === 0 || n === 1) return n;

  return (fibonacci(n - 1) + fibonacci(n - 2));
}

console.log(fibonacci(8));
//
function betterFibonacci(n) {
  let a = 1;
  let b = 0;
  while( n > 0) {
    let temp = a;
    a = b + a;
    b = temp;
    n--;
  }
  return b;
}

console.log(betterFibonacci(6));
