let fruits = ["apple", "banana", "orange", "kiwi"];

fruits.splice(1,1)
fruits.push("grape")

console.log(fruits);


let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8];

let part = arr1.slice(1,4)
let result = part.concat(arr2)

console.log(result);


let numbers = [10,20,30,40];

numbers.shift()
numbers.unshift(5)
numbers.push(50)

console.log(numbers);


let arr = [1,2,[3,4],[5,6],[7,8]];

let flatArr = arr.flat()

console.log(flatArr)
console.log(flatArr.length)