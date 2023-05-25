let tbody=document.querySelector("tbody")
var getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(users => {
            for (let user of users) {
                let tr = document.createElement("tr")
                for (let k in user) {
                    let td = document.createElement("td")
                    td.textContent = user[k]
                    tr.appendChild(td)
                }
                tbody.appendChild(tr)
            }
        })
}

let btn = document.querySelector("button")
btn.addEventListener('click', () => {
    getData()
})