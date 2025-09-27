let arr = [1,2,3,4,5,7]

arr[0] = 5666;
console.log(arr, typeof arr);
console.log(arr.length)

console.log(arr[0])
console.log(arr[3])
console.log(arr[2])

console.log(arr.toString())
console.log(arr.join(" and "))

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]

console.log(a1)
console.log(a2)
console.log(a3)
console.log(a1.concat(a2,a3))

let a = [7, 9, 8]
console.log(a.sort())

// let numbers = [1,2,3,4,5]
// numbers.splice(1,2)
// numbers.splice(1,3)
// numbers.splice(1,3,222,333)
//   (4)[1,222,333,5]