'use strict';

// inefficient way to use recursion to determine what the nth number in the sequence is
function fibonacci(n) {
  if(n === 0 || n === 1) return n;

  return (fibonacci(n - 1) + fibonacci(n - 2));
}
// calling it with a low # so it doesn't iterate too long.
fibonacci(5);

function betterFibonacci(n) {
  let [a, b] = [1, 0];
  while( n-- > 0) {

    [a, b] = [b + a, a];
  }
  return b;
}

// will complete quickly no mater how large the number called with it.
betterFibonacci(200);
