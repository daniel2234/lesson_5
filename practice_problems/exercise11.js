// Practice Problem 11
// Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArray = arr.map((object) => {
  let incrementedObj = {};

  for (let key in object) {
    incrementedObj[key] = object[key] + 1;
  }

  return incrementedObj;
});

console.log(newArray);

//incremented each value on each object of arrays