// Practice Problem 10
// Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArray = arr.map(function(subArray){
  if (typeof subArray[0] === 'string') {
    return subArray.slice().sort().reverse();
  } else {
    return subArray.slice().sort((a,b)=> b - a)
  }
});

console.log(newArray);