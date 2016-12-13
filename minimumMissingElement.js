'use strict';

// positive and negative integers
// minimum missing element - LOWEST POSITIVE NUMBER NOT IN THE ARRAY
// Array is not sorted
// for the sake of this argument, 0 is a positive number
// What do I need to optimize for? "Both."
// Do these numbers represent anything in the real world? "No. They are arbitrary"
// Will there be duplicates? "No. I will change my example to reflect that."
// Will an O(n) solution be okay. "I have to check every index in the array. I can't do better than O(n)"
// Is there any information missing? <--Good question to add

// n^2 solution = going through the array finding numbers sequentially until one is not found.

// n(logn) solution = sort the array first, then step through it until you don't hit a number.
// You would likely not be asked to write a sorting algorithm. Abstract away the details and implement a higher order function
// Time: O(n) + Space: O(n) solution = creating an object with the keys of each array index value that is above 0 and not a duplicate, then check for the values of numbers sequentially, 0 on up, and return the first answer that isn't found.
// Anything larger than the length of the array can be gotten rid of.
// Re-assign the array indices with the corresponding value

// Three passes through the array:
// First pass: Two points, one at the front, one at the end. They move toward each other and stop until the left pointer finds a positive, and the right one finds a negative. They swap with each other. Save the value of the index where the pointers met.
// Second pass: "flip the sign" (+ or -) for the index of the number we run into.
// Third pass: Look for the first value of the array that has the wrong sign for the side it's on

let exampleArray = [-3, 8, -5, 0, 2, 1, -12] // given this input, the output would be 4

function findMinimumMissing(array) {

}
