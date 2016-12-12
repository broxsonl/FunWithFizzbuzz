'use strict';

let fizzBuzzObj = {
  3: 'Fizz',
  5: 'Buzz',
}

function fizzBuzz(n) {

  let answer;

  for (let i = 1; i <= n; i++) {

    let answer = '';

    for (let key in fizzBuzzObj)
      if (!(i % parseInt(key))) {
        answer += fizzBuzzObj[key]
      }
    }
    console.log(output || i);
  }
}

fizzBuzz(100);
