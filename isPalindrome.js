'use strict';

// ASCII encoding x
// output 0 or 1 x
// case insensitive x
// no white spaces
// only contains letters and numbers
// control for different data tyes being passed in x
// if non-string type, throw an error x



function isPalindrome(palindrome) {


  if (typeof(palindrome) !== 'string') throw new Error('Invalid input; not a string.');
  if (!palindrome) throw new Error('Invalid input; no string.');

  let stack = [];
  let stackReverse = [];

  for (let i = 0; i < palindrome.length; i++) {
      stack.push(palindrome[i].toUpperCase());
  }

  for (let i = 0; i < palindrome.length; i++) {
      stackReverse.unshift(palindrome[i].toUpperCase());
  }

  stack = stack.join('');
  stackReverse = stackReverse.join('');

  console.log(stack);
  console.log(stackReverse);

  if (stackReverse === stack) return 1;
  if (stackReverse !== stack) return 0;
}

console.log(isPalindrome('racecar'));
