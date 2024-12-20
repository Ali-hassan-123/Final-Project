var userName = document.getElementById("username");
var userEamil = document.getElementById("email");
var userPass = document.getElementById("password");


function signupFunc() {
    if (userName.value == "" || !userEamil.value || !userPass.value) {
      alert("Please fill all the fields");
      return;
    }
    let usersArray = localStorage.getItem("users") || [];
    console.log("wiuout parse", usersArray);
    if (usersArray.length != 0) {
      usersArray = JSON.parse(usersArray);
    }
    for (var i = 0; i < usersArray.length; i++) {
      if (userEamil.value == usersArray[i].userEamil) {
        alert("Email already in use");
        return;
      }
    }
    const userObj = {
      userName: userName.value,
      userEamil: userEamil.value,
      userPass: userPass.value,
    };
    usersArray.push(userObj);
    localStorage.setItem("users", JSON.stringify(usersArray));
    userName.value = "";
    userEamil.value = "";
    userPass.value = "";
    alert("Signed up successfully");
  }