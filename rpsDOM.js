let playerName = "";
const usernameButton = document.getElementById("usernameButton");
const adminSwitchButton = document.getElementById("adminSwitchButton");
const loginTextBox = document.getElementById("loginTextBox");
const confirmPlayerName = document.getElementById("confirmPlayerName");
const currentWebPage = window.location.href;
const testSomething = document.body;
let flexElement = null;
let adminREGEX = "jek|JEK";


testSomething.addEventListener("click", testingClick)

function testingClick(event){
    // console.log(currentWebPage)
    // urlChange();
    flexElement = document.querySelectorAll("div.loginScreen");
    console.log(flexElement)
}

//change "onsubmit" to "click" to check that this will store the playerName variable properly
usernameButton.addEventListener("onsubmit", handleButtonClick);

//Clicking the admin switch button will switch the login from guest to admin login and vice versa
//This will change form validation requirements along the way
adminSwitchButton.addEventListener("click", handleSwitchButtonClick);

window.addEventListener("onchange", urlChange);

//confirmPlayerName.addEventListener("submit", handleSubmit)


// function handleSubmit(event){
//     playerName = event.target.firstChild.username;
//     console.log(playerName);
// }

function urlChange(event){
    // console.log(currentWebPage)
    // document.querySelectorAll("form")
    // document.querySelectorAll("button")
    // flexElement = currentWebPage.querySelectorAll("div#loginScreen");
    // console.log(flexElement.selectAllChildren())
}

function handleButtonClick(event) {
    event.preventDefault();
    playerName = document.getElementById("loginTextBox").value
    // console.log(event);
    // console.log(playerName);
    console.log(currentWebPage);
}

//console.log(playerName)

function handleSwitchButtonClick(event) {
  console.log("adminSwitchButton Clicked");
  if (adminSwitchButton.classList.contains("active")) {
    console.log("Switching to guest login");
    usernameButton.innerHTML = "Create PLAYER and BEGIN!";
    adminSwitchButton.innerHTML = "Switch to ADMIN login";
    loginTextBox.placeholder = "ENTER USERNAME";
    loginTextBox.classList.remove("adminPriviledge");
    loginTextBox.removeAttribute("pattern");
    loginTextBox.setAttribute("minlength", 3);
    loginTextBox.setAttribute("maxlength", 20);
    adminSwitchButton.classList.remove("active");
    console.dir(usernameButton);
    console.log(document.getElementById("loginTextBox"));
  } else {
    console.log("Switching to admin login");
    usernameButton.innerHTML = "ADMIN LOGIN";
    adminSwitchButton.innerHTML = "Switch to GUEST login";
    loginTextBox.placeholder = "ENTER ADMIN CODE";
    loginTextBox.classList.add("adminPriviledge");
    loginTextBox.setAttribute("pattern", adminREGEX);
    loginTextBox.removeAttribute("minlength");
    loginTextBox.removeAttribute("maxlength");
    adminSwitchButton.classList.add("active");
    console.dir(usernameButton);
    console.log(document.getElementById("loginTextBox"));
  }
  console.log(currentWebPage);
}

console.log(currentWebPage);

// try {
//   function handleButtonClick(event) {
//     console.log(event);
//   }

//   usernameButton.addEventListener("click", handleButtonClick);

//   function handleSwitchButtonClick(event) {
//     console.log("adminSwitchButton Clicked");
//     if (adminSwitchButton.classList.contains("active")) {
//       console.log("Switching to guest login");
//       usernameButton.innerHTML = "Create PLAYER and BEGIN!";
//       adminSwitchButton.innerHTML = "Switch to ADMIN login";
//       loginTextBox.placeholder = "ENTER USERNAME";
//       loginTextBox.classList.remove("adminPriviledge");
//       loginTextBox.removeAttribute("pattern");
//       loginTextBox.setAttribute("minlength", 3);
//       loginTextBox.setAttribute("maxlength", 20);
//       adminSwitchButton.classList.remove("active");
//       console.dir(usernameButton);
//       console.log(document.getElementById("loginTextBox"));
//     } else {
//       console.log("Switching to admin login");
//       usernameButton.innerHTML = "ADMIN LOGIN";
//       adminSwitchButton.innerHTML = "Switch to GUEST login";
//       loginTextBox.placeholder = "ENTER ADMIN CODE";
//       loginTextBox.classList.add("adminPriviledge");
//       loginTextBox.setAttribute("pattern", adminREGEX);
//       loginTextBox.removeAttribute("minlength");
//       loginTextBox.removeAttribute("maxlength");
//       adminSwitchButton.classList.add("active");
//       console.dir(usernameButton);
//       console.log(document.getElementById("loginTextBox"));
//     }
//   }

//   //Clicking the admin switch button will switch the login from guest to admin login and vice versa
//   //This will change requirements along the way
//   adminSwitchButton.addEventListener("click", handleSwitchButtonClick);
// } catch (error) {
//   if (error instanceof TypeError) {
//     console.log(`You caught a type error: ${error}`)
//   } else {
//     console.log(`You caught a different kind of error: ${error}`)
//   }
// }
