
var loginUsername = document.getElementById("loginUsername");
var loginPassword = document.getElementById("loginPassword");





function loginFunc() {
    let usersArray = localStorage.getItem("users");
    if (usersArray == null) {
      alert("You are not signed up");
      return;
    }
    usersArray = JSON.parse(usersArray);
    var flag = false;
    for (var i = 0; i < usersArray.length; i++) {
      if (
        loginUsername.value == usersArray[i].userName &&
        loginPassword.value == usersArray[i].userPass
      ) {
        flag = true;
        alert("Logged in successfully");
        window.location.replace("/product-details.html");
      }
    }
    if (!flag) {
      alert("Please enter correct credentials");
    }
  }