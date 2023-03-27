const loginActivate = document.querySelector(".login-activator")
const loginForm = document.querySelector(".login-form")

const signupActivate = document.querySelector(".signup-activator")
const signupForm = document.querySelector(".signup-form")

const activators = [loginActivate, signupActivate]

activators.forEach(element => {
    element.addEventListener("click", ()=>{
        if (element.innerHTML === "Log In"){
            loginActivate.classList.toggle("activator--display-none")
            loginForm.classList.toggle("form--display-none")
            if(signupActivate.classList.contains("activator--display-none")){
                signupActivate.classList.toggle("activator--display-none")
                signupForm.classList.toggle("form--display-none")
            }
        }else{
            signupActivate.classList.toggle("activator--display-none")
            signupForm.classList.toggle("form--display-none")
            if(signupActivate.classList.contains("activator--display-none")){
                loginActivate.classList.toggle("activator--display-none")
                loginForm.classList.toggle("form--display-none")
            }
        }
    })
})

