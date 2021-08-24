// Practice Problem 8
// Using the forEach method, 
// write some code to output all vowels from the strings in the arrays.
// Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let values = Object.values(obj)
// console.log(values)
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let allVowels = ''

values.forEach(function(element){
  element.forEach(function(element2){
    element2.split('').forEach(function(letter){
        if(vowels.includes(letter)){
          allVowels += letter
        }
    })
  })
})

console.log(allVowels.split(''))