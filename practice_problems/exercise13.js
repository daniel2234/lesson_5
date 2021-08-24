// Practice Problem 13
// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

//Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:

// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]


arr.sort((a,b)=>{

  let oddSum1 = a.filter((element) => element % 2 === 1 )
                 .reduce((element, next) => element + next)
  let oddSum2 = b.filter((element) => element % 2 === 1 )
                 .reduce((element, next) => element + next)

  return oddSum1 - oddSum2;
})

console.log(arr)