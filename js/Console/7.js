// 1. Find even numbers of a given number array
var a = [1, 2, 3, 4, 5]
for (let index = 0; index < a.length; index++) {
    if (a[index] % 2 == 0) console.log(a[index])
}

// 2. Find odd numbers of a given number array
var b = [1, 2, 3, 4, 5]
for (let index = 0; index < b.length; index++) {
    if (b[index] % 2 != 0) console.log(b[index])
}
// 3. Find prime numbers of a given number array
var c = [11, 21, 30, 14, 51, 68]
let count
for (let index = 0; index < c.length; index++) {
    count = 0
    for (let j = 2; j < c[index]; j++) {
        if (c[index] % j == 0) count++
    }
    if (count == 0) console.log(c[index])
}
// 4. Create person ,bike ,car objects with their important properties
var person = {
    name: 'Ram',
    age: 14,
    gender: 'male',
}
var bike = {
    brand: 'husqvarna',
    model: 'Svartpilen',
    price: 250000,
}
var car = {
    brand: 'Aston Martin',
    model: 'Vulcan',
    year: 2016,
    price: 35000000
}
console.log(person,bike,car)
