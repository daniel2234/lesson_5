let sortedArray = [2, 11, 9, 4, 107, 21, 1].sort();
// [ 1, 107, 11, 2, 21, 4, 9 ]

//convert the all the numbers to strings and compares them by their Unicodes character codes
//when the sort is called without arguments, it coerces all the array elements except those that are undefined to their string equivalents, then sorts them using string comparisons

//Sorting the Array Alphabetically

let alphaArray = ['c', 'a', 'e', 'b', 'd'].sort()
// [ 'a', 'b', 'c', 'd', 'e' ]

//sort is destructive

let vowels = ['u', 'i', 'a', 'e', 'o']
vowels.slice().sort()

console.log(vowels)

//reduce and sort
//this will sort and order the the subarrays based on the sum of the subarray
let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
scores.sort((a, b) => {
  let totalAScore = a.reduce((number, next) => number + next);
  let totalBScore = b.reduce((number, next) => number + next);

  return totalAScore - totalBScore;
});

console.log(scores)


[3, 6, 4].reduce((number, next) => number + next)
[6, 8, 9].reduce((number, next) => number + next)


[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  console.log(`a is ${a} and b is ${b}`);
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}); // => [ 1, 2, 4, 9, 11, 21, 107 ]

[2, 11, 9, 4, 107, 21, 1].sort((a, b) => console.log(b - a));

[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  console.log(`a is ${a} and b is ${b}`);
  return a - b;
});

[2, 11, 9, 4, 107, 21, 1] // a is 11 and b is 9 // skips 2?
[2, 9, 11, 4, 107, 21, 1] // a is 2 and b is 9 //
[9, 2, 11, 4, 107, 21, 1] // a is 11 and b is 4
[9, 2, 4, 11, 107, 21, 1] // a is 9 and b is 4

// a is 11 and b is 9
// a is 2 and b is 9
// a is 11 and b is 4
// a is 9 and b is 4
// a is 2 and b is 4
// a is 11 and b is 107
// a is 107 and b is 21
// a is 11 and b is 21
// a is 107 and b is 1
// a is 21 and b is 1
// a is 11 and b is 1
// a is 9 and b is 1
// a is 4 and b is 1
// a is 2 and b is 1
// => [ 1, 2, 4, 9, 11, 21, 107 ]