let user = document.querySelector(".user123")
let popu = document.querySelector(".popup1-wrapper ")
let close1 = document.querySelector(".modalClose")

/* link.addEventListener("click", function (event) {
    event.preventDefault()
    popup.classList.add("modal_show")
    console.log ('клик по сслыке')
})

close.addEventListener("click", function (event) {
    event.preventDefault()
    popup.classList.remove("modal_show")
}) */


user.addEventListener('click' , function(evt) {
    evt.preventDefault()
    console.log('клик по ссылке')
    popu.classList.add('modalShow')
})

close.addEventListener('click' , function(evt) {
    evt.preventDefault()
    console.log('клик по ссылке')
    popu.classList.remove('modalShow')
})