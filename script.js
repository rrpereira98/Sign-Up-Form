let btn = document.querySelector(".createAccountBtn")
const form = document.querySelector("form")
let formData = document.querySelectorAll("input")

form.addEventListener("submit", (e) => {
    let pass1 = document.querySelector("#password")
    let pass2 = document.querySelector("#confirmPassword")
    let errorMessage = document.querySelector(".passError")

    if(pass1.value !== pass2.value) {
        e.preventDefault()
        pass1.classList.add("error")
        pass2.classList.add("error")
        errorMessage.style.display = "block"
    }
})


// btn.addEventListener("click", () => {
//     let finishedForm = Array.from(formData).reduce((acc, input) => ({...acc, [input.id]:input.value}), {})
//     console.log(finishedForm)
// })