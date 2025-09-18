const playerName = ""
const usernameButton = document.getElementById("usernameButton")
const adminSwitchButton = document.getElementById("adminSwitchButton")
const loginTextBox = document.getElementById("loginTextBox")
const adminREGEX = "jek|JEK"

usernameButton.addEventListener("click", handleButtonClick => {
    console.log("starting game")
    //usernameButton.setAttribute("pattern", adminREGEX)
});

adminSwitchButton.addEventListener("click", handleButtonClick => {
    console.log("adminSwitchButton Clicked")
    if (adminSwitchButton.classList.contains("active")){
        console.log("Switching to guest login")
        usernameButton.innerHTML = "Create PLAYER and BEGIN!"
        adminSwitchButton.innerHTML = "Switch to ADMIN login"
        loginTextBox.placeholder = "ENTER USERNAME"
        loginTextBox.removeAttribute("pattern")
        loginTextBox.setAttribute("minlength", 3)
        loginTextBox.setAttribute("maxlength", 20)
        adminSwitchButton.classList.remove("active")
        console.dir(usernameButton)
        console.log(document.getElementById("loginTextBox"))
    }
    else {
        console.log("Switching to admin login")
        usernameButton.innerHTML = "ADMIN LOGIN"
        adminSwitchButton.innerHTML = "Switch to GUEST login"
        loginTextBox.placeholder = "ENTER ADMIN CODE"
        loginTextBox.setAttribute("pattern", adminREGEX)
        loginTextBox.removeAttribute("minlength")
        loginTextBox.removeAttribute("maxlength")
        adminSwitchButton.classList.add("active")
        console.dir(usernameButton)
        console.log(document.getElementById("loginTextBox"))
    }
})
