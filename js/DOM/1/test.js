var heading = document.getElementById("he")
console.log(heading)
var btn=document.querySelector(".btn")
btn.addEventListener('click', () => {
    heading.textContent = "This is a Demo"
})
var btn1=document.querySelector('#btn1')
btn1.addEventListener('click', () => {
    btn1.style.width = "100%"
    btn1.style.transition="width 2s"
    btn1.textContent='Welcome'

})