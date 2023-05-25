let ul = document.querySelector("ul")
var getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            for (let user of users) {
                let li = document.createElement("li")
                let a = document.createElement("a")
                a.textContent = user["name"]
                li.appendChild(a)
                ul.appendChild(li)
            }
        })
}

let btn = document.querySelector("button")
btn.addEventListener('click', () => {
    getData()
})

var getlist = () => {
    fetch("https://jsonplaceholder.typicode.com/users?id=1")
        .then(response => response.json())
        .then(userdata => {
console.log(userdata)
        })
}
getlist()
// let droplist = document.querySelector("li")
// console.log(droplist)
// droplist.addEventListener('click', () => {
//     console.log()
// })