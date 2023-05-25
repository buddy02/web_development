a = [1, 2, 3, 4, 5]
let b = a.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(b)
let smallNum = a.reduce((accumulator, currentValue) => accumulator < currentValue)
console.log(smallNum)