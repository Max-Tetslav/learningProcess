/*===== LOGIN SHOW and HIDDEN =====*/
const singUp = document.getElementById("sing-up"),
    singIn = document.getElementById("sing-in"),
    loginIn = document.getElementById("login-in"),
    loginUp = document.getElementById("login-up");

singUp.addEventListener("click", () => {

    // Remove classes first if they exist
    loginIn.classList.remove("block");
    loginUp.classList.remove("none");

    // Add classes
    loginIn.classList.add("none");
    loginUp.classList.add("block");

})
singIn.addEventListener("click", () => {

    // Remove classes first if they exist
    loginIn.classList.remove("none");
    loginUp.classList.remove("block");

    // Add classes
    loginIn.classList.add("block");
    loginUp.classList.add("none");

})