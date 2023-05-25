// 1st Promise
const callMe = false
// create promise
var prom = new Promise((resolve, reject) => {
    if (callMe === true) resolve("Hello, how are you?")
    else reject("Sorry, I'll call you later")
})

// consuming a promise
prom
.then((message) => {
    console.log("Message: ",message)
})
.catch((err) => {
    console.log("Message: ",err)
})

// 2nd Promise
const delivery = false
// create promise
var prom = new Promise((resolve, reject) => {
    if (callMe === true)
    setTimeout(()=>{resolve("Hello sir, here's your delivery")})
    else setTimeout(()=>{reject("Sorry for the inconvenience,your order got cancelled due to heavy rains")})
})

// consuming a promise
prom
.then((message) => {
    console.log("Message: ",message)
})
.catch((err) => {
    console.log("Message: ",err)
})
setTimeout(()=>{})