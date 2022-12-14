"use strict"
// 1
// function searchString(originalStr, str) {
//     return originalStr.includes(str);
// }

// console.log(searchString("Hello", "llo")); // true
// console.log(searchString("Hello", "www")); // false

// 2
// function capitalizeFirstLetter(string) {
//     return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
// }

// console.log(capitalizeFirstLetter("hello")); // Hello
// console.log(capitalizeFirstLetter("HELLO")); // HELLO
// console.log(capitalizeFirstLetter("hElLo")); // HElLo

// 3
function truncate(str, maxlength) {
    if (str.length > maxlength) {
       return str.slice(0, maxlength) + `...`
    } return str;
}

console.log(truncate("Hello world", 5)); // Hello...
console.log(truncate("Hello world", 25)); // Hello world

// 4
// const students = [
//     {
//         name: 'John Smith',
//         marks: [10, 8, 6, 9, 8, 7 ]
//     },
//     {
//         name: 'John Doe',
//         marks: [ 9, 8, 7, 6, 7 ]
//     },
//     {
//         name: 'Thomas Anderson',
//         marks: [6, 7, 10, 8 ]
//     },
//     {
//         name: 'Jean-Baptiste Emanuel Zorg',
//         marks: [10, 9, 8, 9 ]
//     }
// ]

// function addAverage(array) {
//     for (let item of array) {
//         item.averageMark = item.marks.reduce((sum, current) => sum + current, 0) / item.marks.length;
//     }
//     return students;
// }
// console.log(addAverage(students));

// 5
// const vehicles = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
//   { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
//   { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
//   { make: 'Toyota', model: 'Sequoia', type: 'SUV', price: 45560 },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
//   { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
//   { make: 'Ford', model: 'Explorer', type: 'SUV', price: 31660 }
// ];

// let suvs = vehicles.filter(item => item.type.toUpperCase() === 'SUV');
// let prices = suvs.map(item => item.price);
// let average = prices.reduce((sum, current) => sum + current, 0) / prices.length;

// console.log(average);

// 6
// let getKeysCount = obj => Object.keys(obj).length;

// console.log(getKeysCount({ name: 'John' })); // 1
// console.log(getKeysCount({ name: 'John', age: 22 })); // 2
// console.log(getKeysCount({ name: 'John', salary: null })); // 2

// 7
// let arr = [10, 20, 3, 4, 0, 99, 97];
// let sorted = copySorted(arr);

// function copySorted(arr){
//     let newArray = arr.slice();
//     return newArray.sort((a, b) => a -b );
// }

// console.log(arr); // [10, 20, 3, 4, 0, 99, 97] - ???????????? ???? ???????????? ??????????????????!
// console.log(sorted); // [0, 3, 4, 10, 20, 97, 99]